// "use client";

// import {
//   Youtube,
//   Instagram,
//   Facebook,
//   Linkedin,
// } from "lucide-react";
// import FooterLinks from "./footerLinks";

// export default function Footer() {
//   return (
//     <footer className="mt-32 bg-[#0b0b2a] relative">

//       {/* ================= SUBSCRIBE BAR ================= */}
//       <div className="border-b border-white/10">
//         <div
//           className="
//             mx-auto max-w-7xl px-6 py-10
//             grid gap-6
//             md:grid-cols-[1fr_2fr_auto]
//             items-center
//           "
//         >
//           <h3 className="text-lg font-semibold whitespace-nowrap">
//             Subscribe to stay up-to-date
//           </h3>

//           <input
//             type="email"
//             placeholder="Your email*"
//             className="
//               w-full
//               bg-transparent
//               border-b border-white/30
//               py-2
//               text-white placeholder-white/50
//               focus:outline-none focus:border-white
//             "
//           />

//           <button
//             className="
//               justify-self-start md:justify-self-end
//               rounded-lg bg-white px-5 py-2
//               text-sm font-medium text-[#0b0b2a]
//               hover:bg-white/90 transition
//             "
//           >
//             Submit →
//           </button>
//         </div>
//       </div>

//       {/* ================= MAIN FOOTER ================= */}
//       <div className="mx-auto max-w-7xl px-6 py-20 grid gap-16 lg:grid-cols-[2fr_1fr]">

//         {/* LEFT CARD */}
//         <div className="rounded-3xl bg-white/5 border border-white/10 p-10 grid gap-10 md:grid-cols-[1fr_auto_1fr]">

//           <FooterLinks
//             links={[
//               "Property Developers",
//               "ArchViz / CGI Studios",
//               "Architects / Designers",
//               "Home Builders",
//               "Agents",
//             ]}
//           />

//           {/* Divider */}
//           <div className="hidden md:block w-px bg-white/10" />

//           <FooterLinks
//             links={[
//               "Contact",
//               "Pricing",
//               "Blog",
//               "Client Stories",
//               "Partner Program",
//               "Partner Directory",
//               "Careers",
//               "Help",
//             ]}
//           />
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex flex-col gap-10">

//           {/* SOCIAL */}
//           <div className="flex gap-4">
//             {[Youtube, Instagram, Facebook, Linkedin].map((Icon, i) => (
//               <button
//                 key={i}
//                 className="
//                   w-12 h-12 rounded-xl
//                   bg-white/5 border border-white/10
//                   flex items-center justify-center
//                   hover:bg-white/10 transition
//                 "
//               >
//                 <Icon size={20} />
//               </button>
//             ))}
//           </div>

//           {/* HELP CARD */}
//           <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
//             <h4 className="text-xl font-semibold mb-3">
//               Have questions?
//             </h4>
//             <p className="text-white/70 mb-6">
//               Visit our help centre to access our full knowledge base and customer support.
//             </p>
//             <button
//               className="
//                 rounded-lg bg-violet-600
//                 px-4 py-2 text-sm font-medium
//                 text-white hover:bg-violet-500 transition
//               "
//             >
//               Chat to us →
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* ================= LEGAL ================= */}
//       <div className="border-t border-white/10">
//         <div
//           className="
//             mx-auto max-w-7xl px-6 py-6
//             flex flex-col md:flex-row
//             gap-4 justify-between
//             text-xs text-white/50
//           "
//         >
//           <span>© 2025 Enviz. All rights reserved.</span>

//           <div className="flex flex-wrap gap-4">
//             <span>App Terms of use</span>
//             <span>Website Terms of use</span>
//             <span>Customer Terms of use</span>
//             <span>Privacy Policy</span>
//           </div>
//         </div>
//       </div>

//       {/* ================= CHAT BUBBLE ================= */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <button
//           className="
//             w-14 h-14 rounded-full
//             bg-violet-600 text-white
//             flex items-center justify-center
//             shadow-lg hover:bg-violet-500 transition
//           "
//         >
//           💬
//         </button>
//       </div>

//     </footer>
//   );
// }
"use client";

import {
  Youtube,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import FooterLinks from "./footerLinks";

export default function Footer() {
  return (
    <footer className="mt-32 bg-[#06070c] relative border-t border-white/5">

      {/* ================= SUBSCRIBE BAR ================= */}
      <div className="border-b border-white/10">
        <div
          className="
            mx-auto max-w-7xl px-6 py-10
            grid gap-6
            md:grid-cols-[1fr_2fr_auto]
            items-center
          "
        >
          <h3 className="text-lg font-semibold whitespace-nowrap text-white">
            Subscribe for the latest in VR/AR real estate
          </h3>

          <input
            type="email"
            placeholder="Your work email*"
            className="
              w-full
              bg-transparent
              border-b border-white/20
              py-2
              text-white placeholder-white/40
              focus:outline-none focus:border-blue-500 transition-colors
            "
          />

          <button
            className="
              justify-self-start md:justify-self-end
              rounded-lg bg-blue-600 px-6 py-2.5
              text-sm font-semibold text-white
              hover:bg-blue-700 transition shadow-lg shadow-blue-900/20
            "
          >
            Submit →
          </button>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-16 lg:grid-cols-[2fr_1fr]">

        {/* LEFT CARD: SOLUTIONS & COMPANY */}
        <div className="rounded-3xl bg-white/5 border border-white/10 p-10 grid gap-10 md:grid-cols-[1.5fr_auto_1fr]">
          
          <div className="space-y-6">
            <h4 className="text-blue-500 font-bold uppercase tracking-widest text-xs">Solutions</h4>
            <FooterLinks
              links={[
                "Property Developers & Builders",
                "Brokers & Realtors",
                "Architects & Planners",
                "Home Builders",
                "ArchViz / CGI Studios",
              ]}
            />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-white/10" />

          <div className="space-y-6">
            <h4 className="text-blue-500 font-bold uppercase tracking-widest text-xs">Company</h4>
            <FooterLinks
              links={[
                "Our Process",
                "Pricing Plans",
                "Success Stories",
                "Partner Program",
                "Careers",
                "Help Centre",
              ]}
            />
          </div>
        </div>

        {/* RIGHT SIDE: CONTACT & SOCIAL */}
        <div className="flex flex-col gap-8">
          {/* BRAND & CONTACT SUMMARY */}
          <div className="space-y-4">
             <h2 className="text-2xl font-bold text-white">ShowMySpace</h2>
             <div className="space-y-2 text-sm text-white/60">
                <p className="flex items-center gap-2"><Mail size={14} className="text-blue-500"/> contact@showmyspace.in</p>
                <p className="flex items-center gap-2"><Phone size={14} className="text-blue-500"/> +91 8299808996</p>
                <p className="flex items-start gap-2 leading-relaxed">
                  <MapPin size={14} className="text-blue-500 mt-1"/> 
                  Mount Marry, Bandra West, <br /> Mumbai, Maharashtra 400050
                </p>
             </div>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-3">
            {[Youtube, Instagram, Facebook, Linkedin].map((Icon, i) => (
              <button
                key={i}
                className="
                  w-10 h-10 rounded-lg
                  bg-white/5 border border-white/10
                  flex items-center justify-center text-white/70
                  hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all
                "
              >
                <Icon size={18} />
              </button>
            ))}
          </div>

          {/* HELP CARD */}
          <div className="rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-6">
            <h4 className="text-lg font-semibold text-white mb-2">
              Have questions?
            </h4>
            <p className="text-white/50 text-xs mb-5 leading-relaxed">
              Explore how our digital twin replicas can transform your project ROI.
            </p>
            <button
              className="
                w-full rounded-lg bg-white/10
                px-4 py-2 text-xs font-bold
                text-white border border-white/10 hover:bg-white/20 transition
              "
            >
              Chat to an Expert →
            </button>
          </div>
        </div>
      </div>

      {/* ================= LEGAL ================= */}
      <div className="border-t border-white/10">
        <div
          className="
            mx-auto max-w-7xl px-6 py-8
            flex flex-col md:flex-row
            gap-4 justify-between
            text-[10px] uppercase tracking-widest text-white/30
          "
        >
          <span>© 2026 ShowMySpace Visualization. All rights reserved.</span>

          <div className="flex flex-wrap gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Website Terms</span>
            <span className="hover:text-white transition-colors cursor-pointer">Customer Terms</span>
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* ================= CHAT BUBBLE ================= */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          className="
            w-14 h-14 rounded-full
            bg-blue-600 text-white
            flex items-center justify-center
            shadow-2xl shadow-blue-900/40 hover:scale-110 transition-transform active:scale-95
          "
        >
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
        </button>
      </div>

    </footer>
  );
}