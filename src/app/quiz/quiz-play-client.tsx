"use client";

import { Heading, Text, Column } from "@once-ui-system/core";

type Props = {
  quizCode: string;
};

export default function QuizPlayClient({ quizCode }: Props) {
  return (
    <Column maxWidth="m" gap="l" paddingY="xl">
      <Heading variant="display-strong-m">
        Quiz {quizCode}
      </Heading>

      <Text onBackground="neutral-weak">
        Di sini nanti isi soal-soal quiz 👇
      </Text>

      {/* nanti: soal, opsi jawaban, timer, dll */}
    </Column>
  );
}
