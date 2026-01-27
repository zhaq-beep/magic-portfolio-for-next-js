"use client";

import { useState } from "react";
import {
  Column,
  Heading,
  Text,
  Button,
  Flex,
  Card,
  Badge,
} from "@once-ui-system/core";

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

  const selectAnswer = (index: number) => {
    const copy = [...answers];
    copy[current] = index;
    setAnswers(copy);
  };

  const next = () => {
    if (current < quiz.questions.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      setFinished(true);
    }
  };

  const prev = () => {
    if (current > 0) setCurrent((c) => c - 1);
  };

  const score = answers.filter(
    (a, i) => a === quiz.questions[i]?.correctIndex
  ).length;

  /* ======================
     RESULT PAGE
  ====================== */
  if (finished) {
    return (
      <Column maxWidth={32} gap="24" center>
        <Heading>🎉 Quiz Selesai</Heading>

        <Card padding="24">
          <Column gap="12">
            <Text>
              Skor kamu:
              <strong> {score} / {quiz.questions.length}</strong>
            </Text>

            <Badge
              color={score === quiz.questions.length ? "green" : "yellow"}
            >
              {score === quiz.questions.length
                ? "Sempurna 🔥"
                : "Mantap 💪"}
            </Badge>
          </Column>
        </Card>

        <Button onClick={() => {
          setFinished(false);
          setCurrent(0);
          setAnswers([]);
        }}>
          Ulangi Quiz
        </Button>
      </Column>
    );
  }

  /* ======================
     QUESTION PAGE
  ====================== */
  return (
    <Column maxWidth={40} gap="24">
      <Heading>{quiz.title}</Heading>

      <Text variant="secondary">
        Soal {current + 1} dari {quiz.questions.length}
      </Text>

      <Card padding="24">
        <Column gap="16">
          <Heading size="m">{question.question}</Heading>

          <Column gap="12">
            {question.options.map((opt, i) => (
              <Button
                key={i}
                variant={answers[current] === i ? "solid" : "outline"}
                onClick={() => selectAnswer(i)}
                fillWidth
              >
                {opt}
              </Button>
            ))}
          </Column>
        </Column>
      </Card>

      <Flex justify="space-between">
        <Button
          variant="ghost"
          disabled={current === 0}
          onClick={prev}
        >
          ← Sebelumnya
        </Button>

        <Button
          disabled={answers[current] === undefined}
          onClick={next}
        >
          {current === quiz.questions.length - 1
            ? "Selesai"
            : "Selanjutnya →"}
        </Button>
      </Flex>
    </Column>
  );
}
