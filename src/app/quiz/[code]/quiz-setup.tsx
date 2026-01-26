"use client";

import { Quiz } from "../quiz-data";
import { useRouter } from "next/navigation";

type Props = {
  quiz: Quiz;
};

export default function QuizSetup({ quiz }: Props) {
  const router = useRouter();

  return (
    <div>
      <h1>{quiz.title}</h1>
      <p>Total Modul: {quiz.modules}</p>

      <button
        onClick={() => router.push(`/quiz/${quiz.code}/play`)}
      >
        MULAI SEKARANG
      </button>
    </div>
  );
}
