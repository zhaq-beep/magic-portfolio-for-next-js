"use client";

import {
  Heading,
  Text,
  Column,
  Row,
  Badge,
  RevealFx,
  Input,
} from "@once-ui-system/core";
import Link from "next/link";
import { useState } from "react";

/* ======================
   DATA
====================== */
const courses = [
  { code: "AKD001", title: "Pengetahuan Akidah", modules: 9 },
  { code: "TJW002", title: "Hukum Tajwid", modules: 6 },
  { code: "AKH003", title: "29 Karakter Luhur", modules: 9 },
  { code: "SLT004", title: "Solat", modules: 10 },
  { code: "SRT005", title: "Hafalan Surat", modules: 10 },
  { code: "DOA006", title: "Hafalan Do'a", modules: 10 },
  { code: "DLL007", title: "Hafalan Dalil", modules: 10 },
  { code: "PSA008", title: "Puasa", modules: 10 },
];

export default function QuizClient() {
  const [query, setQuery] = useState("");

  const filteredCourses = courses.filter(
    (c) =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.code.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Column maxWidth="xl" gap="xl" paddingY="xl" horizontal="center">
      {/* ================= HERO ================= */}
      <Column horizontal="center" align="center" gap="m">
        <Badge background="brand-alpha-weak" onBackground="brand-strong">
          QUIZ CENTER
        </Badge>

        <Heading variant="display-strong-l">
          Portal <span style={{ color: "var(--brand-strong)" }}>Quiz</span>
        </Heading>

        <Text onBackground="neutral-weak" align="center">
          Silahkan pilih tema quiz yaa
        </Text>
      </Column>

      {/* ================= SEARCH ================= */}
      <Column maxWidth="s" fillWidth marginTop="m">
        <Input
          placeholder="Cari tema quiz atau kode..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Column>

      {/* ================= LIST ================= */}
      <Column fillWidth gap="l" marginTop="xl">
        <Heading variant="display-strong-s">Daftar Quiz</Heading>

        <Row
          gap="m"
          wrap
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          }}
        >
          {filteredCourses.map((course) => (
            <Link
              key={course.code}
              href={`/quiz/${course.code}`}
              style={{ textDecoration: "none" }}
            >
              <Column
                padding="m"
                radius="l"
                gap="s"
                background="neutral-alpha-weak"
                border="neutral-alpha-medium"
                style={{
                  height: "100%",
                  cursor: "pointer",
                }}
              >
                {/* ICON */}
                <Column
                  width="32"
                  height="32"
                  align="center"
                  justify="center"
                  radius="s"
                  background="brand-alpha-weak"
                >
                  📘
                </Column>

                {/* TITLE */}
                <Heading variant="heading-strong-s">
                  {course.title}
                </Heading>

                {/* CODE */}
                <Text size="xs" onBackground="neutral-weak">
                  {course.code}
                </Text>

                {/* MODULE */}
                <Text size="xs" onBackground="neutral-weak">
                  ⏱ {course.modules} Modul
                </Text>
              </Column>
            </Link>
          ))}

          {filteredCourses.length === 0 && (
            <Text onBackground="neutral-weak">
              Quiz tidak ditemukan 😔
            </Text>
          )}
        </Row>
      </Column>
    </Column>
  );
}
