// "use client";

// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import {COUNTRIES} from "@/lib/countries";

// export default function BookACallPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     countryCode: "+971",
//     phone: "",
//     company: "",
//     profession: "",
//     requirement: "",
//   });

//   const handleChange = (key: string, value: string) => {
//     setForm((prev) => ({ ...prev, [key]: value }));
//   };

// //   const handleSubmit = async () => {
// //     const payload = {
// //       ...form,
// //       source: "book-a-call",
// //       createdAt: new Date().toISOString(),
// //     };

// //     console.log("FORM DATA:", payload);

// //     // later:
// //     // await fetch("/api/contact", {
// //     //   method: "POST",
// //     //   headers: { "Content-Type": "application/json" },
// //     //   body: JSON.stringify(payload),
// //     // });
// //   };
// const handleSubmit = async () => {
//   try {
//     const res = await fetch("/api/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       console.error("Validation error:", data.error);
//       return;
//     }

//     alert("✅ We'll get back to you soon!");
//   } catch (err) {
//     console.error(err);
//     alert("❌ Something went wrong");
//   }
// };

//   return (
//     <section className="min-h-screen bg-[#06070c] text-white px-6 py-20">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
//         {/* LEFT */}
//         <div>
//           <h1 className="text-4xl font-semibold leading-tight">
//             Begin your journey with <br /> <span className="text-blue-500">PropVR</span> now
//           </h1>

//           <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-white/80">
//             <li>• Immersive Exploration</li>
//             <li>• Gaming Solutions</li>
//             <li>• Digital Twins</li>
//             <li>• Walkthroughs & Renders</li>
//           </ul>
//         </div>

//         {/* RIGHT FORM
//         <div className="bg-white text-black rounded-2xl shadow-xl p-8 w-full max-w-lg mx-auto">
//           <h2 className="text-xl font-semibold text-center mb-6">
//             Contact Us
//           </h2>

//           <div className="space-y-4">
//             <Input placeholder="Name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("name", e.target.value)} />
//             <Input placeholder="Work Email" type="email" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("email", e.target.value)} />

//             <div className="flex gap-3">
//               <Select onValueChange={(v: string) => handleChange("countryCode", v)}>
//                 <SelectTrigger className="w-[120px]">
//                   <SelectValue placeholder="+971" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="+971">🇦🇪 +971</SelectItem>
//                   <SelectItem value="+91">🇮🇳 +91</SelectItem>
//                   <SelectItem value="+1">🇺🇸 +1</SelectItem>
//                 </SelectContent>
//               </Select>
//               <Input placeholder="Phone number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("phone", e.target.value)} />
//             </div>

//             <Input className="border-black" placeholder="Company Name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("company", e.target.value)} />

//             <Select onValueChange={(v: string) => handleChange("profession", v)}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Profession" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="Real Estate Developer">Real Estate Developer</SelectItem>
//                 <SelectItem value="Consultant">Consultant</SelectItem>
//                 <SelectItem value="Architect">Architect</SelectItem>
//                 <SelectItem value="Other">Other</SelectItem>
//               </SelectContent>
//             </Select>

//             <Textarea
//               placeholder="Requirement"
//               rows={4}
//               onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange("requirement", e.target.value)}
//             />

//             <Button
//               className="w-full bg-black text-white hover:bg-black/90 rounded-xl"
//               onClick={handleSubmit}
//             >
//               Request a call back
//             </Button>
//           </div>
//         </div> */}
//         <div className="bg-white text-black rounded-3xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)] p-8 sm:p-10 w-full max-w-lg mx-auto">
//   <h2 className="text-2xl font-semibold text-center mb-1">
//     Contact Us
//   </h2>
//   <p className="text-sm text-neutral-500 text-center mb-8">
//     Tell us a bit about yourself and we’ll get back to you
//   </p>

//   <div className="space-y-5">
//     {/* Name */}
//     <Input
//       placeholder="Full name"
//       className="h-12 border-gray-950 rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500"
//       onChange={(e) => handleChange("name", e.target.value)}
//     />

//     {/* Email */}
//     <Input
//       placeholder="Work email"
//       type="email"
//       className="h-12 rounded-xl border-gray-950  focus-visible:ring-2 focus-visible:ring-blue-500"
//       onChange={(e) => handleChange("email", e.target.value)}
//     />

//     {/* Phone */}
//     <div className="flex  gap-3">
//       <Select onValueChange={(v) => handleChange("countryCode", v)}>
//         <SelectTrigger className="h-12 border-gray-950  w-[140px] rounded-xl">
//           <SelectValue placeholder="+971" />
//         </SelectTrigger>
//         <SelectContent className="max-h-[260px]">
//           {COUNTRIES.map((c) => (
//             <SelectItem key={c.code} value={c.dial_code}>
//               <span className="flex items-center gap-2">
//                 <span>{c.flag}</span>
//                 <span className="text-sm">{c.name}</span>
//                 <span className="ml-auto text-neutral-500">
//                   {c.dial_code}
//                 </span>
//               </span>
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>

//       <Input
//         placeholder="Phone number"
//         className="h-12 rounded-xl border-gray-950  focus-visible:ring-2 focus-visible:ring-blue-500"
//         onChange={(e) => handleChange("phone", e.target.value)}
//       />
//     </div>

//     {/* Company */}
//     <Input
//       placeholder="Company name"
//       className="h-12 rounded-xl border-gray-950  focus-visible:ring-2 focus-visible:ring-blue-500"
//       onChange={(e) => handleChange("company", e.target.value)}
//     />

//     {/* Profession */}
//     <Select onValueChange={(v) => handleChange("profession", v)}>
//       <SelectTrigger className="h-12 border-gray-950  rounded-xl">
//         <SelectValue placeholder="Profession" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectItem value="Real Estate Developer">Real Estate Developer</SelectItem>
//         <SelectItem value="Consultant">Consultant</SelectItem>
//         <SelectItem value="Architect">Architect</SelectItem>
//         <SelectItem value="Other">Other</SelectItem>
//       </SelectContent>
//     </Select>

//     {/* Requirement */}
//     <Textarea
//       placeholder="Tell us what you’re looking to build…"
//       rows={4}
//       className="rounded-xl border-gray-950  focus-visible:ring-2 focus-visible:ring-blue-500"
//       onChange={(e) => handleChange("requirement", e.target.value)}
//     />

//     {/* CTA */}
//     <Button
//       className="w-full h-12 text-base rounded-xl bg-black text-white hover:bg-neutral-900 transition-all"
//       onClick={handleSubmit}
//     >
//       Request a call back →
//     </Button>
//   </div>
// </div>

//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { COUNTRIES } from "@/lib/countries";
import { Mail, Phone, MapPin } from "lucide-react";

export default function BookACallPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "+91", // Updated default for Mumbai-based ShowMySpace
    phone: "",
    company: "",
    profession: "",
    requirement: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Submission failed");

      alert("✅ We'll get back to you soon!");
    } catch (err) {
      alert("❌ Something went wrong");
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-[#06070c] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SECTION: BRANDING & CONTACT INFO */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-blue-500 font-medium uppercase tracking-widest text-sm">Get In Touch</h3>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Ready to Transform Your <br /> 
              <span className="text-blue-500">Property Marketing?</span>
            </h1>
            <p className="text-neutral-400 text-lg max-w-md">
              Experience the future of property visualization. Contact us to start your immersive journey today.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-white/80">
            <li className="flex items-center gap-2">✓ Immersive Exploration</li>
            <li className="flex items-center gap-2">✓ Digital Twins</li>
            <li className="flex items-center gap-2">✓ VR/AR Experiences</li>
            <li className="flex items-center gap-2">✓ Remote Sales Tools</li>
          </ul>

          {/* ADDED CONTACT DETAILS FROM BROCHURE */}
          <div className="pt-8 space-y-6 border-t border-white/10">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-neutral-500">Email us at</p>
                <p className="font-medium">contact@showmyspace.in</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-neutral-500">Call us at</p>
                <p className="font-medium">+91 8299808996</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-neutral-500">Visit us</p>
                <p className="font-medium">Bandra West, Mumbai, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white text-black rounded-3xl shadow-2xl p-8 sm:p-10 w-full max-w-lg lg:ml-auto">
          <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
          <p className="text-sm text-neutral-500 mb-8">
            Tell us about your project and we’ll get back to you within 24 hours.
          </p>

          <div className="space-y-4">
            <Input
              placeholder="Full name"
              className="h-12 border-neutral-200 rounded-xl"
              onChange={(e) => handleChange("name", e.target.value)}
            />

            <Input
              placeholder="Work email"
              type="email"
              className="h-12 border-neutral-200 rounded-xl"
              onChange={(e) => handleChange("email", e.target.value)}
            />

            <div className="flex gap-3">
              <Select onValueChange={(v) => handleChange("countryCode", v)} defaultValue="+91">
                <SelectTrigger className="h-12 border-neutral-200 w-[110px] rounded-xl">
                  <SelectValue placeholder="+91" />
                </SelectTrigger>
                <SelectContent>
                  {COUNTRIES.map((c) => (
                    <SelectItem key={c.code} value={c.dial_code}>
                      {c.flag} {c.dial_code}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Input
                placeholder="Phone number"
                className="h-12 border-neutral-200 flex-1 rounded-xl"
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>

            <Input
              placeholder="Company name"
              className="h-12 border-neutral-200 rounded-xl"
              onChange={(e) => handleChange("company", e.target.value)}
            />

            <Select onValueChange={(v) => handleChange("profession", v)}>
              <SelectTrigger className="h-12 border-neutral-200 rounded-xl">
                <SelectValue placeholder="I am a..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Property Developer">Property Developer / Builder</SelectItem>
                <SelectItem value="Broker">Broker / Realtor</SelectItem>
                <SelectItem value="Architect">Architect / Planner</SelectItem>
                <SelectItem value="Buyer">Investor / Buyer</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>

            <Textarea
              placeholder="Tell us about your requirements..."
              rows={4}
              className="border-neutral-200 rounded-xl resize-none"
              onChange={(e) => handleChange("requirement", e.target.value)}
            />

            <Button
              className="w-full h-14 text-lg font-bold rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20"
              onClick={handleSubmit}
            >
              Request a Demo →
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}