import { Schema, Meta } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import QuizSetup from "./quiz-setup";

type Props = {
  params: { code: string };
};

export async function generateMetadata({ params }: Props) {
  return Meta.generate({
    title: `Pengaturan Quiz ${params.code}`,
    description: "Atur mode dan durasi quiz sebelum mulai",
    baseURL,
    path: `/quiz/${params.code}`,
  });
}

export default function QuizCodePage({ params }: Props) {
  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={`/quiz/${params.code}`}
        title={`Pengaturan Quiz ${params.code}`}
        description="Silahkan kamu pilih quiznya"
        author={{
          name: person.name,
          url: baseURL,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <QuizSetup code={params.code} />
    </>
  );
}
