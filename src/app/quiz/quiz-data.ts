/* ======================
   TYPES
====================== */

export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number; // index jawaban benar
}

export interface Quiz {
  code: string;
  title: string;
  modules: number;      // dipakai di QuizClient (⏱ Modul)
  description: string;  // info quiz
  duration: number;     // menit
  questions: Question[]; // soal
}

/* ======================
   DATA QUIZ
====================== */

export const QUIZZES: Quiz[] = [
  {
    code: "AKD001",
    title: "Pengetahuan Akidah",
    modules: 9,
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
          "Mengamalkan saja",
        ],
        answer: 2,
      },
      {
        id: 2,
        question: "Rukun iman ada berapa?",
        options: ["4", "5", "6", "7"],
        answer: 2,
      },
    ],
  },

  {
    code: "TJW002",
    title: "Hukum Tajwid",
    modules: 6,
    description: "Dasar-dasar hukum tajwid dalam Al-Qur'an",
    duration: 8,
    questions: [
      {
        id: 1,
        question: "Idgham bighunnah terjadi jika nun mati bertemu huruf?",
        options: ["Ya, Nun, Mim, Wau", "Lam dan Ra", "Alif dan Ba", "Jim dan Dal"],
        answer: 0,
      },
    ],
  },

  {
    code: "AKH003",
    title: "29 Karakter Luhur",
    modules: 9,
    description: "Mengenal dan memahami akhlak mulia",
    duration: 10,
    questions: [],
  },

  {
    code: "SLT004",
    title: "Solat",
    modules: 10,
    description: "Pemahaman dasar tentang sholat",
    duration: 12,
    questions: [],
  },

  {
    code: "SRT005",
    title: "Hafalan Surat",
    modules: 10,
    description: "Uji hafalan surat pendek",
    duration: 10,
    questions: [],
  },

  {
    code: "DOA006",
    title: "Hafalan Do'a",
    modules: 10,
    description: "Uji hafalan doa harian",
    duration: 10,
    questions: [],
  },

  {
    code: "DLL007",
    title: "Hafalan Dalil",
    modules: 10,
    description: "Hafalan dalil Al-Qur'an dan Hadits",
    duration: 10,
    questions: [],
  },

  {
    code: "PSA008",
    title: "Puasa",
    modules: 10,
    description: "Pemahaman dasar tentang puasa",
    duration: 10,
    questions: [],
  },
];
