import QuizClient from "../quiz-client";

export default function QuizByCodePage({
  params,
}: {
  params: { code: string };
}) {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">
        Quiz: {params.code}
      </h1>

      <QuizClient quizCode={params.code} />
    </main>
  );
}
