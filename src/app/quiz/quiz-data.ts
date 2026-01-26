// src/app/quiz/quiz-data.ts

export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
};

export type Quiz = {
  title: string;
  code: string;
  modules: number;
  questions: QuizQuestion[];
};

export const QUIZZES: Quiz[] = [
  {
    title: "JavaScript Dasar",
    code: "JS001",
    modules: 5,
    questions: [
      {
        question: "Apa itu closure?",
        options: [
          "Fungsi dalam fungsi",
          "Variable global",
          "Async function",
          "Promise",
        ],
        answer: 0,
      },
    ],
  },
];
