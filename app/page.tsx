import ScrollBackground from "@/components/layout/scrollBackground";
import Hero from "@/components/hero/herovideo";
import TrustedBy from "@/components/trusted/trustedBy";
// import FeatureShowcase from "@/components/features/featureShowcase";
import WorkflowSection from "@/components/workflow/workflowSection";
import UseCases from "@/components/usecases/useCases";
import CTASection from "@/components/cta/ctaSection";
import PresentSection from "@/components/present/presentSection";
import AnimatedTestimonialsDemo from "@/components/testimonials/testimonials";
import FeatureShowcase from "@/components/autoshowcase/featureShowcase";
import BookACallPage from "@/components/book-a-call/bookCall";
export default function HomePage() {
 
  return (
    <>
    <ScrollBackground>
      <Hero />
      {/* <TrustedBy /> */}
      <FeatureShowcase />
      <WorkflowSection />
      <PresentSection/>
      <UseCases />
      <CTASection />
      <AnimatedTestimonialsDemo />
      <BookACallPage/>
    </ScrollBackground>

    </>
  );
}
