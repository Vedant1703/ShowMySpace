// import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

// export default function AnimatedTestimonialsDemo() {
//   const testimonials = [
//     {
//       quote:
//         "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
//       name: "Sarah Chen",
//       designation: "Product Manager at TechFlow",
//       src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       quote:
//         "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
//       name: "Michael Rodriguez",
//       designation: "CTO at InnovateSphere",
//       src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       quote:
//         "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
//       name: "Emily Watson",
//       designation: "Operations Director at CloudScale",
//       src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       quote:
//         "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
//       name: "James Kim",
//       designation: "Engineering Lead at DataPro",
//       src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       quote:
//         "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
//       name: "Lisa Thompson",
//       designation: "VP of Technology at FutureNet",
//       src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//   ];
//   return(
//      <AnimatedTestimonials testimonials={testimonials} />
//   );
// }
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    // {
    //   quote:
    //     "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    //   name: "Sarah Chen",
    //   designation: "Product Manager at Techflow",
    //   src: "/assets/testimonials/sarah-chen.jpg", // From brochure 
    // },
    {
      quote:
        "I build immersive 3D, virtual, and XR experiences that transform architectural vision into reality—helping developers and architects sell with precision.",
      name: "Mohd Zaid",
      designation: "Founder & CEO, ShowMySpace",
      src: "/assets/team/zaid.jpg", // From brochure [cite: 215]
    },
    {
      quote:
        "We design scalable, high-performance systems that transform how properties are visualized, managed, and experienced through cutting-edge technology.",
      name: "Mohd Asim",
      designation: "CTO & Lead Architect, ShowMySpace",
      src: "/assets/team/asim.jpg", // From brochure [cite: 218]
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-neutral-950">
       <div className="text-center mb-12">
          <h3 className="text-blue-500 font-medium uppercase tracking-widest text-sm mb-2">Leadership & Trust</h3>
          <h2 className="text-4xl font-bold text-white">Voice of Innovation</h2>
       </div>
       <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
}