import { notFound } from "next/navigation";
import { experiences } from "@/data/experiences";
import ExperienceDetailClient from "./ExperienceDetailClient";

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const experience = experiences.find((item) => item.id === Number(id));

  if (!experience) {
    notFound();
  }

  return <ExperienceDetailClient experience={experience} />;
}
