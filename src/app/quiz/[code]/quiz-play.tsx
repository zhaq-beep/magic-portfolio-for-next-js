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
  if (!quiz || !quiz.questions || quiz.questions.length === 0) {
    return (
      <Column maxWidth={32} gap="24" center>
        <Heading>Quiz kosong 😭</Heading>
        <Text>Data soal belum tersedia.</Text>
      </Column>
    );
  }

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

  const resetQuiz = () => {
    setFinished(false);
    setCurrent(0);
    setAnswers([]);
  };

  const score = answers.filter(
    (a, i) => a === quiz.questions[i]?.correctIndex
  ).length;

  if (finished) {
    return (
      <Column maxWidth={32} gap="24" center>
        <Heading>🎉 Quiz Selesai</Heading>

        <Card padding="24">
          <Column gap="12">
            <Text>
              Skor kamu:
              <strong>
                {" "}
                {score} / {quiz.questions.length}
              </strong>
            </Text>

            <Badge
              color={
                score === quiz.questions.length
                  ? "green"
                  : "yellow"
              }
            >
              {score === quiz.questions.length
                ? "Sempurna 🔥"
                : "Mantap 💪"}
            </Badge>
          </Column>
        </Card>

        <Button variant="primary" onClick={resetQuiz}>
          Ulangi Quiz
        </Button>
      </Column>
    );
  }

  return (
    <Column maxWidth={40} gap="24">
      <Heading>{quiz.title}</Heading>

      <Text variant="body-strong-m">
        Soal {current + 1} dari {quiz.questions.length}
      </Text>

      <Card padding="24">
        <Column gap="16">
          <Heading size="m">{question.question}</Heading>

          <Column gap="12">
            {question.options.map((opt, i) => {
              const isSelected = answers[current] === i;

              return (
                <Button
                  key={i}
                  variant={isSelected ? "primary" : "secondary"}
                  onClick={() => selectAnswer(i)}
                  fillWidth
                >
                  {opt}
                </Button>
              );
            })}
          </Column>
        </Column>
      </Card>

      <Flex
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <Button
          variant="secondary"
          disabled={current === 0}
          onClick={prev}
        >
          ← Sebelumnya
        </Button>

        <Button
          variant="primary"
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
