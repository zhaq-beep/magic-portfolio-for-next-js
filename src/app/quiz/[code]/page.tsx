export const dynamic = "force-static";

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import QuizPlay from "./quiz-play";

const quizzes = [
  {
    code: "math-basic",
    title: "Matematika Dasar",
    description: "Uji pemahaman matematika dasar",
    questions: [],
  },
];

export async function generateStaticParams() {
  return quizzes.map((q) => ({
    code: q.code,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { code: string };
}): Promise<Metadata> {
  const quiz = quizzes.find((q) => q.code === params.code);

  return {
    title: quiz?.title ?? "Quiz",
    description: quiz?.description,
  };
}

export default function QuizPage({
  params,
}: {
  params: { code: string };
}) {
  const quiz = quizzes.find((q) => q.code === params.code);

  if (!quiz) notFound();

  return <QuizPlay quiz={quiz} />;
}
