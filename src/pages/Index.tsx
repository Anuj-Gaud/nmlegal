import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { CTABanner } from "@/components/home/CTABanner";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <TestimonialsPreview />
      <CTABanner />
    </Layout>
  );
};

export default Index;
