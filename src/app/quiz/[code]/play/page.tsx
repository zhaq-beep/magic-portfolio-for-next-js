import { QUIZZES } from "../../quiz-data";
import PlayClient from "./play-client";

export default function PlayPage({
  params,
}: {
  params: { code: string };
}) {
  const quiz = QUIZZES.find((q) => q.code === params.code);
  if (!quiz) return <div>Quiz tidak ditemukan</div>;

  return <PlayClient quiz={quiz} />;
}
