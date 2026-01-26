// src/app/quiz/[code]/page.tsx
import { QUIZZES } from "../quiz-data";
import QuizSetup from "./quiz-setup";

export default function QuizSetupPage({
  params,
}: {
  params: { code: string };
}) {
  const quiz = QUIZZES.find((q) => q.code === params.code);

  if (!quiz) return <div>Quiz tidak ditemukan</div>;

  return <QuizSetup quiz={quiz} />;
}
