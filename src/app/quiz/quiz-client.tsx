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
type Quiz = {
  title: string;
  code: string;
  modules: number;
};

/* ======================
   DATA (dummy dulu)
   nanti bisa ganti API
====================== */
const courses: Quiz[] = [
  {
    title: "Matematika Dasar",
    code: "math-basic",
    modules: 5,
  },
  {
    title: "Sejarah Dunia",
    code: "history-world",
    modules: 8,
  },
  {
    title: "Fisika SMA",
    code: "physics-sma",
    modules: 6,
  },
  {
    title: "Pemrograman JavaScript",
    code: "js-fundamental",
    modules: 10,
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

        <Heading size="display-strong-l">
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
        <Heading size="display-strong-s">Daftar Quiz</Heading>

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

                <Heading size="heading-strong-s">
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
