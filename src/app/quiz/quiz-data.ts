export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
}

export interface Quiz {
  code: string;
  title: string;
  description: string;
  duration: number;
  questions: Question[];
}

export const QUIZZES: Quiz[] = [
  {
    code: "AKD001",
    title: "Pengetahuan Akidah",
    description: "Uji pemahaman dasar akidah Islam",
    duration: 10,
    questions: [
      {
        id: 1,
        question: "Apa arti iman?",
        options: [
          "Percaya dalam hati",
          "Percaya dan mengamalkan",
          "Percaya dalam hati, diucapkan, dan diamalkan",
          "Mengamalkan saja"
        ],
        answer: 2
      },
      {
        id: 2,
        question: "Rukun iman ada berapa?",
        options: ["4", "5", "6", "7"],
        answer: 2
      }
    ]
  }
];
