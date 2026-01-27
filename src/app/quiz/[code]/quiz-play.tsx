"use client";

import {
  Column,
  Heading,
  Text,
  Button,
  Badge,
  Row,
} from "@once-ui-system/core";
import { useState } from "react";

/* ======================
   TYPES
====================== */
type Question = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
};

type Quiz = {
  title: string;
  description: string;
  questions: Question[];
};

export default function QuizPlay({ quiz }: { quiz: Quiz }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const question = quiz.questions[current];

  function answer(index: number) {
    const next = [...answers];
    next[current] = index;
    setAnswers(next);

    if (current === quiz.questions.length - 1) {
      setFinished(true);
    } else {
      setCurrent(current + 1);
    }
  }

  const score = quiz.questions.reduce((acc, q, i) => {
    return acc + (answers[i] === q.correctIndex ? 1 : 0);
  }, 0);

  /* ======================
     RESULT
  ====================== */
  if (finished) {
    return (
      <Column maxWidth="s" gap="l" paddingY="xl" horizontal="center">
        <Heading size="l">Hasil Quiz</Heading>

        <Text>
          Skor kamu: <strong>{score}</strong> / {quiz.questions.length}
        </Text>

        <Text onBackground="neutral-weak">
          {score === quiz.questions.length
            ? "Perfect score 🎉"
            : "Lumayan! Coba lagi biar makin jago 💪"}
        </Text>

        <Button onClick={() => {
          setAnswers([]);
          setCurrent(0);
          setFinished(false);
        }}>
          Ulangi Quiz
        </Button>
      </Column>
    );
  }

  /* ======================
     QUESTION
  ====================== */
  return (
    <Column maxWidth="s" gap="l" paddingY="xl" horizontal="center">
      <Badge>
        Soal {current + 1} / {quiz.questions.length}
      </Badge>

      <Heading size="l">{quiz.title}</Heading>

      <Text>{question.question}</Text>

      <Column gap="s">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant="secondary"
            onClick={() => answer(index)}
          >
            {option}
          </Button>
        ))}
      </Column>
    </Column>
  );
}
