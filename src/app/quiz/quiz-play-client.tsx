"use client";

import { Column, Heading, Text } from "@once-ui-system/core";

type QuizPlayClientProps = {
  quizCode: string;
};

export default function QuizPlayClient({ quizCode }: QuizPlayClientProps) {
  return (
    <Column maxWidth="m" gap="l" paddingY="xl">
      <Heading variant="display-strong-m">
        Quiz {quizCode}
      </Heading>

      <Text onBackground="neutral-weak">
        Soal-soal untuk kode <b>{quizCode}</b> akan muncul di sini
      </Text>
    </Column>
  );
}
