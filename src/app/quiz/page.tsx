import { Schema, Meta } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import QuizClient from "./quiz-client";

/* ======================
   METADATA
====================== */
export async function generateMetadata() {
  return Meta.generate({
    title: "Portal Quiz & Materi",
    description: "Mainkan quiz sambil menambah ilmu ✨",
    baseURL,
    path: "/quiz",
  });
}

/* ======================
   PAGE (SERVER)
====================== */
export default function QuizPage() {
  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/quiz"
        title="Portal Quiz & Materi"
        description="Mainkan quiz sambil menambah ilmu"
        author={{
          name: person.name,
          url: baseURL,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {/* CLIENT UI */}
      <QuizClient />
    </>
  );
}
