import HeroSection from "./features/landing/components/HeroSection";
import ServiceSickPlants from "./features/landing/components/ServiceSickPlants";
import ServiceReplanting from "./features/landing/components/ServiceReplanting";
import ServiceWatering from "./features/landing/components/ServiceWatering";
import Logo from "@/components/header/Logo";

export default function Home() {
  return (
    <div>
      <header className="bg-opacity-100 flex justify-center absolute w-full z-10 pt-40">
        <Logo />
      </header>
      <section className="h-screen flex flex-col justify-center items-center bg-backgroundGreen">
        <HeroSection />
      </section>
      <main className="relative gap-8 min-h-screen">
        <section className="h-screen flex flex-col relative">
          <ServiceReplanting />
        </section>
        <section className="h-screen flex justify-center items-center bg-backgroundGreen">
          <ServiceWatering />
        </section>
        <section className="h-screen flex flex-col justify-center items-center bg-backgroundGreen">
          <ServiceSickPlants />
        </section>
      </main>
    </div>
  );
}
