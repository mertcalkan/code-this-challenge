import Navigation from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { WorksSection } from "@/components/WorksSection";
import { WhatIsCreativeCoding } from "@/components/WhatIsCreativeCoding";
import { Philosophy } from "@/components/Philosophy";
import { StudentWorks } from "@/components/StudentWorks";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <HeroSection />
      <WhatIsCreativeCoding />
      <Philosophy />
      <WorksSection />
      <ContactSection />
        <Footer />

    </div>
  );
};

export default Index;
