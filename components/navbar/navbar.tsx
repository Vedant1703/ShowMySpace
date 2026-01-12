



// "use client";
// import {
//   Navbar,
//   NavBody,
//   NavItems,
//   MobileNav,
//   NavbarLogo,
//   NavbarButton,
//   MobileNavHeader,
//   MobileNavToggle,
//   MobileNavMenu,
// } from "@/components/ui/resizable-navbar";
// import { useState } from "react";

// import { useScrollTheme } from "@/components/layout/scrollBackground";


// export default function NavbarDemo() {
  

//  const navItems = [
//   { name: "Solutions", link: "#solutions" },
//   { name: "Process", link: "#process" },
//   { name: "Pricing", link: "#pricing" },
//   { name: "Contact", link: "#contact" },
// ];

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// // Update SolutionsDropdown content based on brochure [cite: 130, 132, 136]
// function SolutionsDropdown() {
//   return (
//     <div className="...">
//       <a className="...">Developers & Builders</a>
//       <a className="...">Brokers & Realtors</a>
//       <a className="...">Architects & Planners</a>
//       <a className="...">Home Builders</a>
//       <a className="...">ArchViz / CGI Studios</a>
//     </div>
//   );
// }
//   return (
//     <div className="relative w-full">
//       <Navbar>
//         {/* Desktop Navigation */}
//         <NavBody>
//           <NavbarLogo />
//           <NavItems items={navItems} />
//           <div className="flex items-center gap-4">
//             <NavbarButton variant="secondary">Login</NavbarButton>
//             <NavbarButton variant="primary">Book a Demo</NavbarButton>
//           </div>
//         </NavBody>

//         {/* Mobile Navigation */}
//         <MobileNav>
//           <MobileNavHeader>
//             <NavbarLogo />
//             <MobileNavToggle
//               isOpen={isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             />
//           </MobileNavHeader>

//           <MobileNavMenu
//             isOpen={isMobileMenuOpen}
//             onClose={() => setIsMobileMenuOpen(false)}
//           >
//             {navItems.map((item, idx) => (
//               <a
//                 key={`mobile-link-${idx}`}
//                 href={item.link}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="relative text-neutral-600 dark:text-neutral-300"
//               >
//                 <span className="block">{item.name}</span>
//               </a>
//             ))}
//             <div className="flex w-full flex-col gap-4">
//               <NavbarButton
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 variant="primary"
//                 className="w-full"
//               >
//                 Login
//               </NavbarButton>
//               <NavbarButton
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 variant="primary"
//                 className="w-full"
//               >
//                 Book a call
//               </NavbarButton>
//             </div>
//           </MobileNavMenu>
//         </MobileNav>
//       </Navbar>
//       {/* <DummyContent /> */}

//       {/* Navbar */}
//     </div>
//   );
// }

// const DummyContent = () => {
//   return (
//     <div className="container mx-auto p-8 pt-24">
//       <h1 className="mb-4 text-center text-3xl font-bold">
//         Check the navbar at the top of the container
//       </h1>
//       <p className="mb-10 text-center text-sm text-zinc-500">
//         For demo purpose we have kept the position as{" "}
//         <span className="font-medium">Sticky</span>. Keep in mind that this
//         component is <span className="font-medium">fixed</span> and will not
//         move when scrolling.
//       </p>
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
//         {[
//           {
//             id: 1,
//             title: "The",
//             width: "md:col-span-1",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 2,
//             title: "First",
//             width: "md:col-span-2",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 3,
//             title: "Rule",
//             width: "md:col-span-1",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 4,
//             title: "Of",
//             width: "md:col-span-3",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 5,
//             title: "F",
//             width: "md:col-span-1",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 6,
//             title: "Club",
//             width: "md:col-span-2",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 7,
//             title: "Is",
//             width: "md:col-span-2",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 8,
//             title: "You",
//             width: "md:col-span-1",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 9,
//             title: "Do NOT TALK about",
//             width: "md:col-span-2",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//           {
//             id: 10,
//             title: "F Club",
//             width: "md:col-span-1",
//             height: "h-60",
//             bg: "bg-neutral-100 dark:bg-neutral-800",
//           },
//         ].map((box) => (
//           <div
//             key={box.id}
//             className={`${box.width} ${box.height} ${box.bg} flex items-center justify-center rounded-lg p-4 shadow-sm`}
//           >
//             <h2 className="text-xl font-medium">{box.title}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export default function NavbarDemo() {
  const navItems = [
    {
      name:"Experience-center",
      link: "/experience-center",
    },
    {
      name: "Process",
      link: "/#process",
    },
    {
      name: "Solutions",
      link: "/#solutions",
    },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Updated to reflect the industry roles from the brochure
  function SolutionsDropdown() {
    return (
      <div className="flex flex-col gap-4 text-sm fixed top-0 inset-x-0 z-50 bg-white/40 dark:bg-black/30 backdrop-blur-md transition-colors text-neutral-800">
        <a className="hover:text-blue-600">Property Developers & Builders</a>
        <a className="hover:text-blue-600">Brokers & Realtors</a>
        <a className="hover:text-blue-600">Architects & Planners</a>
        <a className="hover:text-blue-600">Home Builders</a>
        <a className="hover:text-blue-600">ArchViz / CGI Studios</a>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          {/* Ensure your NavbarLogo component uses the "ShowMySpace" text or logo asset */}
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
            {/* Changed from 'Book a call' to 'Book a Demo' to match high-tech sales style */}
            <NavbarButton href="/#contact" variant="primary">Book a Demo</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              {/* <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
              >
                Login
              </NavbarButton> */}
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a Demo
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}