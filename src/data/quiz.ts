export type QuizQuestion = {
  id: number
  question: string
  options: string[]
  answer: number
}

export const quizData = {
  tajwid: {
    title: "Hukum Tajwid",
    duration: 300, // detik
    questions: [
      {
        id: 1,
        question: "Apa hukum bacaan nun mati bertemu ba?",
        options: ["Idzhar", "Iqlab", "Ikhfa", "Idgham"],
        answer: 1,
      },
      {
        id: 2,
        question: "Berapa huruf idgham bighunnah?",
        options: ["2", "3", "4", "5"],
        answer: 2,
      },
    ],
  },
}
