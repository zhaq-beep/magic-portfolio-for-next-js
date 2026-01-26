import QuizPlayClient from "../quiz-play-client";

export default function QuizPlayPage({
  params,
}: {
  params: { code: string };
}) {
  return <QuizPlayClient quizCode={params.code} />;
}
