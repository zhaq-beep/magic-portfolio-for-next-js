import { notFound } from "next/navigation";
import type { Metadata } from "next";
import QuizPlay from "./quiz-play";

const quizzes = [
  {
    code: "math-basic",
    title: "Matematika Dasar",
    description: "Uji pemahaman matematika dasar",
    questions: []
  }
];

type PageProps = {
  params: {
    code: string;
  };
};

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const quiz = quizzes.find(q => q.code === params.code);

  if (!quiz) {
    return {
      title: "Quiz Not Found"
    };
  }

  return {
    title: quiz.title,
    description: quiz.description
  };
}

export default function QuizPage({ params }: PageProps) {
  const quiz = quizzes.find(q => q.code === params.code);

  if (!quiz) notFound();

  return <QuizPlay quiz={quiz} />;
}
