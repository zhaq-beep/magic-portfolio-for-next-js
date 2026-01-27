import QuizPlay from "./quiz-play";

/* ======================
   DUMMY DATA
====================== */
const QUIZ_DATA: Record<string, any> = {
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

  TJW002: {
    title: "Hukum Tajwid",
    description: "Quiz dasar tentang tajwid",
    questions: [
      {
        id: "1",
        question: "Apa itu Idgham?",
        options: [
          "Membaca jelas",
          "Meleburkan huruf",
          "Memantulkan suara",
          "Memanjangkan bacaan",
        ],
        correctIndex: 1,
      },
    ],
  },
};

export default function QuizPage({
  params,
}: {
  params: { code: string };
}) {
  const quiz = QUIZ_DATA[params.code.toUpperCase()];

  if (!quiz) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Quiz tidak ditemukan 😔</h2>
        <p>Kode: {params.code}</p>
      </div>
    );
  }

  return <QuizPlay quiz={quiz} />;
}
