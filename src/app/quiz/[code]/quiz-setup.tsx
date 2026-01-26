"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Column,
  Row,
  Heading,
  Text,
  Button,
  Badge,
} from "@once-ui-system/core";
import { Quiz } from "../quiz-data";

type Props = {
  quiz: Quiz;
};

export default function QuizSetup({ quiz }: Props) {
  const router = useRouter();

  const [mode, setMode] = useState<
    "santai" | "ujian" | "survival" | "hafalan"
  >("santai");
  const [total, setTotal] = useState(10);
  const [review, setReview] = useState<"akhir" | "langsung">("langsung");

  const startQuiz = () => {
    router.push(
      `/quiz/${quiz.code}/play?mode=${mode}&total=${total}&review=${review}`
    );
  };

  return (
    <Column maxWidth="l" gap="xl" paddingY="xl">
      {/* HEADER */}
      <Column gap="s">
        <Badge background="brand-alpha-weak">
          {quiz.code}
        </Badge>

        <Heading variant="display-strong-m">
          {quiz.title}
        </Heading>

        <Text onBackground="neutral-weak">
          Total Modul: {quiz.modules}
        </Text>
      </Column>

      {/* MODE */}
      <Column gap="s">
        <Text weight="strong">Modus Operandi</Text>

        <Row gap="s" wrap>
          {["santai", "ujian", "survival", "hafalan"].map((m) => (
            <Button
              key={m}
              variant={mode === m ? "primary" : "secondary"}
              onClick={() => setMode(m as any)}
            >
              {m}
            </Button>
          ))}
        </Row>
      </Column>

      {/* JUMLAH SOAL */}
      <Column gap="s">
        <Text>
          Target Soal: <b>{total}</b>
        </Text>

        <input
          type="range"
          min={5}
          max={quiz.modules * 5}
          value={total}
          onChange={(e) => setTotal(+e.target.value)}
        />
      </Column>

      {/* VISIBILITAS PEMBAHASAN */}
      <Column gap="s">
        <Text weight="strong">Pembahasan</Text>

        <Row gap="s">
          <Button
            variant={review === "akhir" ? "primary" : "secondary"}
            onClick={() => setReview("akhir")}
          >
            Akhir
          </Button>

          <Button
            variant={review === "langsung" ? "primary" : "secondary"}
            onClick={() => setReview("langsung")}
          >
            Langsung
          </Button>
        </Row>
      </Column>

      {/* CTA */}
      <Button size="l" onClick={startQuiz}>
        MULAI SEKARANG
      </Button>
    </Column>
  );
}
