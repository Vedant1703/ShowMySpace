"use client";

import { useEffect, useState } from "react";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Loader2, Download, Search, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterProfession, setFilterProfession] = useState("All");

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact");
      const result = await res.json();
      if (result.success) setLeads(result.data);
    } catch (error) {
      console.error("Failed to fetch leads", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Update lead status (e.g., from "New" to "Demo Scheduled") 
  const updateStatus = async (id: string, newStatus: string) => {
    try {
      await fetch(`/api/contact/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status: newStatus }),
      });
      fetchLeads(); // Refresh data
    } catch (error) {
      console.error("Update failed");
    }
  };

  const filteredLeads = leads.filter((lead: any) => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         lead.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterProfession === "All" || lead.profession === filterProfession;
    return matchesSearch && matchesFilter;
  });

  if (loading) return (
    <div className="h-screen flex items-center justify-center bg-[#06070c]">
      <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#06070c] text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Leads Management</h1>
            <p className="text-neutral-400 text-sm">Review and track ShowMySpace property inquiries.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="bg-white/5 border-white/10" onClick={fetchLeads}>
              <RefreshCw className="mr-2 h-4 w-4" /> Refresh
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2 h-4 w-4" /> Export CSV
            </Button>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-neutral-500" />
            <Input 
              placeholder="Search leads or companies..." 
              className="pl-10 bg-black/20 border-white/10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select onValueChange={setFilterProfession}>
            <SelectTrigger className="bg-black/20 border-white/10">
              <SelectValue placeholder="Filter by Stakeholder" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Stakeholders</SelectItem>
              <SelectItem value="Property Developer">Developers & Builders </SelectItem>
              <SelectItem value="Broker">Brokers & Realtors </SelectItem>
              <SelectItem value="Architect">Architects & Planners </SelectItem>
              <SelectItem value="Buyer">Buyers & Investors </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Leads Table */}
        <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/5">
          <Table>
            <TableHeader className="bg-white/5">
              <TableRow>
                <TableHead className="text-neutral-400">Date</TableHead>
                <TableHead className="text-neutral-400">Lead Info</TableHead>
                <TableHead className="text-neutral-400">Stakeholder</TableHead>
                <TableHead className="text-neutral-400">Status</TableHead>
                <TableHead className="text-neutral-400 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLeads.map((lead: any) => (
                <TableRow key={lead._id} className="hover:bg-white/[0.02] border-white/5">
                  <TableCell className="text-xs text-neutral-500">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{lead.name}</div>
                    <div className="text-xs text-neutral-400">{lead.company}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-blue-400 border-blue-400/30">
                      {lead.profession}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Select defaultValue={lead.status} onValueChange={(v) => updateStatus(lead._id, v)}>
                      <SelectTrigger className="w-32 h-8 text-xs bg-black/40 border-white/10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="New">New</SelectItem>
                        <SelectItem value="Contacted">Contacted</SelectItem>
                        <SelectItem value="Demo Scheduled">Demo Scheduled</SelectItem>
                        <SelectItem value="Closed">Closed</SelectItem>
                        <SelectItem value="Lost">Lost</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" className="text-xs hover:bg-white/10" onClick={() => alert(lead.requirement)}>
                      View Requirement
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}