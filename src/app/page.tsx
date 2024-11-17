import HeroSection from "@/features/landing/components/HeroSection";
import ServiceSickPlants from "@/features/landing/components/ServiceSickPlants";
import ServiceReplanting from "@/features/landing/components/ServiceReplanting";
import ServiceWatering from "@/features/landing/components/ServiceWatering";

export default function Home() {
  return (
    <div className="text-center">
      <HeroSection />
      <ServiceReplanting />
      <ServiceWatering />
      <ServiceSickPlants />
    </div>
  );
}
