import { QUIZZES } from "../quiz-data";
import QuizSetup from "./quiz-setup";
import { notFound } from "next/navigation";

export default function QuizCodePage({
  params,
}: {
  params: { code: string };
}) {
  const quiz = QUIZZES.find((q) => q.code === params.code);

  if (!quiz) return notFound();

  return <QuizSetup quiz={quiz} />;
}
