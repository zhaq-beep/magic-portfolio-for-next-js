import { Column, Heading, Text } from "@once-ui-system/core";
import { notFound } from "next/navigation";

const quizData: Record<string, { title: string }> = {
  MATA4101: { title: "Pengetahuan Akidah" },
  MATA4112: { title: "Hukum Tajwid" },
  EKMA4321: { title: "29 Karakter Luhur" },
};

export default function QuizDetail({
  params,
}: {
  params: { code: string };
}) {
  const quiz = quizData[params.code];

  if (!quiz) return notFound();

  return (
    <Column padding="40" gap="16">
      <Heading>{quiz.title}</Heading>
      <Text>Kode: {params.code}</Text>
      <Text>Soal akan tampil di sini 👇</Text>
    </Column>
  );
}
