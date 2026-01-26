"use client";

import { useState } from "react";
import { Button, Column, Heading, Text } from "@once-ui-system/core";
import type { Quiz } from "../../quiz-data";

export default function PlayClient({ quiz }: { quiz: Quiz }) {
  const [current, setCurrent] = useState(0);

  const q = quiz.questions[current];

  return (
    <Column gap="l">
      <Heading>{q.question}</Heading>

      {q.options.map((opt, i) => (
        <Button key={i} onClick={() => setCurrent((c) => c + 1)}>
          {opt}
        </Button>
      ))}

      <Text size="xs">
        {current + 1} / {quiz.questions.length}
      </Text>
    </Column>
  );
}
