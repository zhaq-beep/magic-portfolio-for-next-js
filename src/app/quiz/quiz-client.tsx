"use client";

import {
  Heading,
  Text,
  Column,
  Row,
  Badge,
  Input,
} from "@once-ui-system/core";
import Link from "next/link";
import { useState, useMemo } from "react";

/* ======================
   TYPES
====================== */
type QuizMeta = {
  title: string;
  code: string;
};

/* ======================
   DATA (dummy dulu)
   nanti bisa ganti API
====================== */
const courses: QuizMeta[] = [
  {
    title: "Pengetahuan Akidah",
    code: "AKD001",
  },
  {
    title: "Hukum Tajwid",
    code: "TJW002",
  },
  {
    title: "29 Karakter Luhur",
    code: "KLH003",
  },
  {
    title: "Solat",
    code: "SLT004",
  },
  {
    title: "Hafalan Surat",
    code: "SRT005",
  },
  {
    title: "Hafalan Do'a",
    code: "DOA006",
  },
  {
    title: "Hafalan Dalil",
    code: "DLL007",
  },
];

export default function QuizClient() {
  const [query, setQuery] = useState("");

  /* ======================
     FILTER LOGIC
  ====================== */
  const filteredCourses = useMemo(() => {
    const q = query.toLowerCase();
    return courses.filter(
      (course) =>
        course.title.toLowerCase().includes(q) ||
        course.code.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <Column maxWidth="xl" gap="xl" paddingY="xl" horizontal="center">
      {/* ======================
          HERO
      ====================== */}
      <Column horizontal="center" align="center" gap="m">
        <Badge background="brand-alpha-weak" onBackground="brand-strong">
          QUIZ CENTER
        </Badge>

        <Heading size="xl">
          Portal <span style={{ color: "var(--brand-strong)" }}>Quiz</span>
        </Heading>

        <Text onBackground="neutral-weak" align="center">
          Silahkan pilih tema quiz yaa
        </Text>
      </Column>

      {/* ======================
          SEARCH
      ====================== */}
      <Column maxWidth="s" fillWidth>
        <Input
          id="search-quiz"
          aria-label="Cari quiz"
          placeholder="Cari tema quiz atau kode..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Column>

      {/* ======================
          LIST
      ====================== */}
      <Column fillWidth gap="l">
        <Heading size="l">Daftar Quiz</Heading>

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
                style={{ cursor: "pointer" }}
              >
                <Column
                  width="32"
                  height="32"
                  align="center"
                  radius="s"
                  background="brand-alpha-weak"
                >
                  📘
                </Column>

                <Heading size="s">
                  {course.title}
                </Heading>

                <Text size="xs" onBackground="neutral-weak">
                  {course.code}
                </Text>

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
