// "use client";

// import { motion } from "framer-motion";
// import { Monitor, Tablet, Smartphone, Headset } from "lucide-react";

// const devices = [
//   { name: "Headset", icon: Headset },
//   { name: "Tablet", icon: Tablet },
//   { name: "Browser", icon: Monitor },
//   { name: "Mobile", icon: Smartphone },
// ];

// export default function DeviceSwitcher() {
//   return (
//     <div className="flex gap-2 bg-white/5 p-2 rounded-xl">
//       {devices.map(({ name, icon: Icon }) => (
//         <motion.button
//           key={name}
//           whileHover={{ y: -2 }}
//           className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-transparent hover:bg-white/10 transition"
//         >
//           <Icon size={16} />
//           {name}
//         </motion.button>
//       ))}
//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { Monitor, Tablet, Smartphone, Headset } from "lucide-react";

const devices = [
  { label: "Headset", icon: Headset },
  { label: "Desktop", icon: Monitor },
  { label: "Tablet", icon: Tablet },
  { label: "Mobile", icon: Smartphone },
];

export default function DeviceSwitcher() {
  return (
    <div className="flex gap-2 rounded-xl bg-white/5 p-2 backdrop-blur-md">
      {devices.map(({ label, icon: Icon }) => (
        <motion.button
          key={label}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition"
        >
          <Icon size={16} />
          {label}
        </motion.button>
      ))}
    </div>
  );
}
