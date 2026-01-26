import { QUIZZES } from "../quiz-data";
import QuizPlayClient from "../quiz-play-client";

export default function QuizByCodePage({
  params,
}: {
  params: { code: string };
}) {
  const quiz = QUIZZES.find(q => q.code === params.code);

  if (!quiz) {
    return <div className="text-white">Quiz tidak ditemukan</div>;
  }

  return <QuizPlayClient quizCode={quiz.code} />;
}
