export const dynamicParams = false;

import { notFound } from "next/navigation";
import { Schema, Meta } from "@once-ui-system/core";
import type { Metadata } from "next";
import QuizPlay from "./quiz-play";
import { baseURL } from "@/resources";

/* ======================
   DUMMY DATA
   (nanti bisa dari DB / API)
====================== */
const quizzes = [
  {
    code: "math-basic",
    title: "Matematika Dasar",
    description: "Uji pemahaman matematika dasar",
    questions: [
      {
        id: "q1",
        question: "2 + 2 = ?",
        options: ["3", "4", "5", "6"],
        correctIndex: 1,
      },
      {
        id: "q2",
        question: "5 × 3 = ?",
        options: ["15", "10", "20", "8"],
        correctIndex: 0,
      },
    ],
  },
];

/* ======================
   STATIC PARAMS (🔥 WAJIB)
====================== */
export async function generateStaticParams() {
  return quizzes.map((quiz) => ({
    code: quiz.code,
  }));
}

/* ======================
   METADATA
====================== */
export async function generateMetadata({
  params,
}: {
  params: { code: string };
}): Promise<Metadata> {
  const quiz = quizzes.find((q) => q.code === params.code);

  if (!quiz) return {};

  return Meta.generate({
    title: quiz.title,
    description: quiz.description,
    baseURL,
    path: `/quiz/${quiz.code}`,
  });
}

/* ======================
   PAGE (SERVER)
====================== */
export default function QuizPage({
  params,
}: {
  params: { code: string };
}) {
  const quiz = quizzes.find((q) => q.code === params.code);

  if (!quiz) notFound();

  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={quiz.title}
        description={quiz.description}
        path={`/quiz/${quiz.code}`}
      />

      {/* CLIENT */}
      <QuizPlay quiz={quiz} />
    </>
  );
}
