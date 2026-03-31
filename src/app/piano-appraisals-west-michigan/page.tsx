import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/services";
import { ServicePageContent } from "@/components/ServicePageContent";
import { notFound } from "next/navigation";

const service = getServiceBySlug("piano-appraisals-west-michigan")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function PianoAppraisalsPage() {
  if (!service) notFound();
  return <ServicePageContent service={service} />;
}
