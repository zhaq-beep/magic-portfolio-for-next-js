import { Column, Heading, Text } from "@once-ui-system/core";
import { notFound } from "next/navigation";

const quizData: Record<string, { title: string }> = {
  001: { title: "Pengetahuan Akidah" },
  002: { title: "Hukum Tajwid" },
  003: { title: "29 Karakter Luhur" },
  004: { title: "Solat" },
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
