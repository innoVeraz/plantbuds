import HeroSection from "./features/landing/components/HeroSection";
import ServiceSickPlants from "./features/landing/components/ServiceSickPlants";
import ServiceReplanting from "./features/landing/components/ServiceReplanting";
import ServiceWatering from "./features/landing/components/ServiceWatering";
import Logo from "@/components/header/Logo";

export default function Home() {
  return (
    <div className="text-center">
      <header className="bg-opacity-100 flex justify-center absolute w-full z-10 pt-10">
        <Logo />
      </header>
      <HeroSection />
      <ServiceReplanting />
      <ServiceWatering />
      <ServiceSickPlants />
    </div>
  );
}
