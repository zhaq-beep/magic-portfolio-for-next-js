import { quizData } from "../quiz-data";
import QuizSetup from "./quiz-setup";
import { notFound } from "next/navigation";

export default function QuizCodePage({
  params,
}: {
  params: { code: string };
}) {
  const quiz = quizData[params.code];

  if (!quiz) {
    notFound(); // ⬅️ INI yang bikin 404
  }

  return <QuizSetup quiz={quiz} code={params.code} />;
}
