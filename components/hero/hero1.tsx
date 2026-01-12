// import MaskedVideo from "./maskedVideo";
// import DeviceSwitcher from "./deviceSwitcher";

// export default function Hero() {
//   return (
//     <section className="relative px-6 pt-28 pb-32">
//       <div className="mx-auto max-w-7xl text-center space-y-6">
//         <p className="text-sm text-violet-400">
//           • XR platforms to experience spaces
//         </p>

//         <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
//           Bring your designs to life
//           <br />
//           in immersive XR
//         </h1>

//         <p className="text-white/70 max-w-2xl mx-auto">
//           Create immersive spaces from your 3D models or floor plans.
//         </p>

//         <div className="pt-6">
//           <button className="px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 transition shadow-[0_0_25px_rgba(139,92,246,0.45)]">
//             Create an experience today →
//           </button>
//         </div>
//       </div>

//       {/* VIDEO */}
//       <div className="mt-20">
//         <MaskedVideo />
//         <div className="flex justify-center mt-6">
//           <DeviceSwitcher />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { cn } from "@/lib/utils";
import { useScrollTheme } from "@/components/layout/scrollBackground";

import MaskedVideo from "./maskedVideo";
import DeviceSwitcher from "./deviceSwitcher";

export default function Hero() {
  const { isLight } = useScrollTheme();

  return (
    <section className="relative pt-40 pb-32">
      <div className="mx-auto max-w-6xl px-6 text-center space-y-6">
        <h1
          className={cn(
            "text-4xl md:text-6xl font-semibold leading-tight transition-colors duration-300",
            isLight ? "text-[#0b0b2a]" : "text-white"
          )}
        >
          Bring your designs
          <br />
          to life in immersive XR
        </h1>

        <p
          className={cn(
            "mx-auto max-w-2xl transition-colors duration-300",
            isLight ? "text-[#0b0b2a]/70" : "text-white/70"
          )}
        >
          Create immersive spaces from your 3D models or floor plans.
        </p>

        <div className="pt-6">
          <button
            className={cn(
              "rounded-lg px-6 py-3 font-medium transition-all",
              isLight
                ? "bg-violet-600 text-white hover:bg-violet-500"
                : "bg-violet-600 text-white hover:bg-violet-500 shadow-[0_0_24px_rgba(139,92,246,0.4)]"
            )}
          >
            Create an experience →
          </button>
        </div>
      </div>
            {/* MASKED VIDEO */}
      <div className="relative z-0 mt-24">
        <MaskedVideo />
        <div className="mt-6 flex justify-center">
          <DeviceSwitcher />
        </div>
      </div>

      {/* BACKGROUND GRADIENT */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b0b2a]" />
    </section>
  );
}


// "use client";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden pt-32 pb-36">
//       {/* TEXT CONTENT */}
//       <div className="relative z-10 mx-auto max-w-6xl px-6 text-center space-y-6">
//         <p className="text-sm tracking-widest text-violet-400 uppercase">
//           XR Platform
//         </p>

//         <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
//           Bring your designs to life
//           <br />
//           in immersive XR
//         </h1>

//         <p className="mx-auto max-w-2xl text-white/70">
//           Create immersive experiences from your 3D models or floor plans,
//           accessible across devices.
//         </p>

//         <div className="pt-6">
//           <button className="rounded-lg bg-violet-600 px-6 py-3 text-white transition hover:bg-violet-500 shadow-[0_0_30px_rgba(139,92,246,0.45)]">
//             Create an experience →
//           </button>
//         </div>
//       </div>


//     </section>
//   );
// }
