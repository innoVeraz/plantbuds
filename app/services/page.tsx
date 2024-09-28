import { servicesData } from "@/lib/data";
import React from "react";

export default function Services() {
  return (
    <section
      className="flex flex-col gap-8 items-center min-h-screen"
      id="services"
    >
      <ul>
        {servicesData.map((service, index) => (
          <li key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
