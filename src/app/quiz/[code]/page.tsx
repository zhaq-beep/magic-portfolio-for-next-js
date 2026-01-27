export const dynamic = "force-dynamic";

import QuizPlay from "./quiz-play";

type Question = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
};

type Quiz = {
  title: string;
  description: string;
  questions: Question[];
};

const QUIZ_DATA: Record<string, Quiz> = {
  AKD001: {
    title: "Pengetahuan Akidah",
    description: "Quiz dasar tentang akidah Islam",
    questions: [
      {
        id: "1",
        question: "Apa arti iman?",
        options: [
          "Percaya dalam hati",
          "Percaya dalam hati, diucapkan, diamalkan",
          "Hanya ucapan",
          "Hanya perbuatan",
        ],
        correctIndex: 1,
      },
      {
        id: "2",
        question: "Rukun iman ada berapa?",
        options: ["3", "4", "5", "6"],
        correctIndex: 3,
      },
    ],
  },
};

export default function QuizPage({
  params,
}: {
  params: { code?: string };
}) {
  const code = params?.code?.toUpperCase();
  const quiz = code ? QUIZ_DATA[code] : null;

  if (!quiz) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Quiz tidak ditemukan 😔</h2>
        <p>Kode: {code || "-"}</p>
      </div>
    );
  }

  return <QuizPlay quiz={quiz} />;
}
