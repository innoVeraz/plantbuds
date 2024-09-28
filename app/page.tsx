import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import { PostalCodeForm } from "@/components/postalcode/PostalCodeForm";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-8  min-h-screen">
      <Hero />
      <Heading>Plant services to your doorstep</Heading>
      <PostalCodeForm />
    </main>
  );
}
