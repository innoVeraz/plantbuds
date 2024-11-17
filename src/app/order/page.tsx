"use client";

import { useForm } from "react-hook-form";
import { date, z } from "zod";

const formSchema = z.object({
  // customer information
  name: z.string().min(2).max(255),
  email: z.string().min(2).max(255),
  phone: z.string().min(2).max(255),
  // delivery address
  address: z.string().min(2).max(255),
  postalcode: z.string().min(5),
  city: z.string().min(2).max(255),
  // payment information
  cardnumber: z.string().min(16).max(16),
  cardholder: z.string().min(2).max(255),
  expiry: z.string().min(5).max(5),
  cvc: z.string().min(3).max(3),
  // order details
  service: z.enum(["replant", "watering", "healthcheck"]),
  datetime: z.string().datetime(),
});

export default function OrderForm() {
  const form = useForm;
}
