export type Quiz = {
  code: string;
  title: string;
  modules: number;
};

export const QUIZZES: Quiz[] = [
  {
    code: "AKD001",
    title: "Pengetahuan Akidah",
    modules: 9,
  },
  {
    code: "TJW002",
    title: "Hukum Tajwid",
    modules: 6,
  },
  {
    code: "AKH003",
    title: "29 Karakter Luhur",
    modules: 9,
  },
  {
    code: "SLT004",
    title: "Solat",
    modules: 10,
  },
  {
    code: "SRT005",
    title: "Hafalan Surat",
    modules: 10,
  },
  {
    code: "DOA006",
    title: "Hafalan Do'a",
    modules: 10,
  },
  {
    code: "DLL007",
    title: "Hafalan Dalil",
    modules: 10,
  },
  {
    code: "PSA008",
    title: "Puasa",
    modules: 10,
  },
];
