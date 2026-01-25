"use client";

import {
  Column,
  Row,
  Heading,
  Text,
  Badge,
  Button,
} from "@once-ui-system/core";
import { useState } from "react";
import Link from "next/link";

type Props = {
  code: string;
};

export default function QuizSetup({ code }: Props) {
  const [mode, setMode] = useState<"santai" | "ujian" | "survival" | "hafalan">(
    "ujian"
  );
  const [questionCount, setQuestionCount] = useState(45);
  const [duration, setDuration] = useState(10);
  const [discussion, setDiscussion] = useState<"akhir" | "langsung">(
    "langsung"
  );

  return (
    <Column maxWidth="xl" paddingY="xl" gap="xl" horizontal="center">
      {/* HEADER */}
      <Column gap="s" align="center">
        <Badge background="brand-alpha-weak" onBackground="brand-strong">
          PENGATURAN KUIS
        </Badge>

        <Heading variant="display-strong-m">Pengaturan Kuis</Heading>

        <Text onBackground="neutral-weak">
          Sesuaikan latihan dengan kebutuhanmu
        </Text>
      </Column>

      {/* CARD */}
      <Column
        fillWidth
        gap="l"
        padding="l"
        radius="l"
        background="neutral-alpha-weak"
        border="neutral-alpha-medium"
      >
        {/* MODE */}
        <Column gap="s">
          <Text size="xs" onBackground="neutral-weak">
            MODUS OPERANDI
          </Text>

          <Row gap="s" wrap>
            {[
              { key: "santai", label: "Santai", icon: "♾️" },
              { key: "ujian", label: "Ujian", icon: "⏳" },
              { key: "survival", label: "Survival", icon: "💀" },
              { key: "hafalan", label: "Hafalan", icon: "📖" },
            ].map((m) => (
              <Column
                key={m.key}
                padding="m"
                radius="m"
                align="center"
                gap="xs"
                background={
                  mode === m.key
                    ? "brand-alpha-medium"
                    : "neutral-alpha-weak"
                }
                border="neutral-alpha-medium"
                style={{ cursor: "pointer", minWidth: 120 }}
                onClick={() => setMode(m.key as any)}
              >
                <Text>{m.icon}</Text>
                <Text size="s">{m.label}</Text>
              </Column>
            ))}
          </Row>
        </Column>

        {/* JUMLAH SOAL */}
        <Column gap="xs">
          <Row justify="space-between">
            <Text size="xs" onBackground="neutral-weak">
              TARGET SOAL
            </Text>
            <Badge>{questionCount} SOAL</Badge>
          </Row>

          <input
            type="range"
            min={5}
            max={100}
            value={questionCount}
            onChange={(e) => setQuestionCount(Number(e.target.value))}
          />
        </Column>

        {/* DURASI */}
        <Column gap="xs">
          <Row justify="space-between">
            <Text size="xs" onBackground="neutral-weak">
              DURASI (MENIT)
            </Text>
            <Badge>{duration}</Badge>
          </Row>

          <input
            type="range"
            min={5}
            max={60}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
        </Column>

        {/* PEMBAHASAN */}
        <Column gap="s">
          <Text size="xs" onBackground="neutral-weak">
            VISIBILITAS PEMBAHASAN
          </Text>

          <Row gap="s">
            {[
              { key: "akhir", label: "Akhir" },
              { key: "langsung", label: "Langsung" },
            ].map((v) => (
              <Column
                key={v.key}
                padding="m"
                radius="m"
                align="center"
                background={
                  discussion === v.key
                    ? "brand-alpha-medium"
                    : "neutral-alpha-weak"
                }
                border="neutral-alpha-medium"
                style={{ cursor: "pointer", flex: 1 }}
                onClick={() => setDiscussion(v.key as any)}
              >
                <Text>{v.label}</Text>
              </Column>
            ))}
          </Row>
        </Column>
      </Column>

      {/* CTA */}
      <Link
        href={`/quiz/${code}/start`}
        style={{ width: "100%", textDecoration: "none" }}
      >
        <Button size="l" fillWidth>
          MULAI SEKARANG
        </Button>
      </Link>
    </Column>
  );
}
