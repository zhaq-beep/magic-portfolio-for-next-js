import QuizPlayClient from "../quiz-play-client";

export default function QuizByCodePage({
  params,
}: {
  params: { code: string };
}) {
  return <QuizPlayClient quizCode={params.code} />;
}
