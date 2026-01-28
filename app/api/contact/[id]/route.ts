import { connectDB } from "@/lib/db";
import { Contact } from "@/models/Contact";
import { NextResponse } from "next/server";

// UPDATE & DELETE
export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await connectDB();
  const body = await req.json();
  const updated = await Contact.findByIdAndUpdate(id, body, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await connectDB();
  await Contact.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted successfully" });
}