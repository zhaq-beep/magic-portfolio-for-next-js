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
import { useState } from "react";
import { QUIZZES, type Quiz } from "./quiz-data";

export default function QuizClient() {
  const [query, setQuery] = useState("");

  const filteredCourses: Quiz[] = QUIZZES.filter(
    (c: Quiz) =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.code.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Column maxWidth="xl" gap="xl" paddingY="xl" horizontal="center">
      {/* HERO */}
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

      {/* SEARCH */}
      <Column maxWidth="s" fillWidth>
        <Input
          placeholder="Cari tema quiz atau kodenya..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Column>

      {/* LIST */}
      <Column fillWidth gap="l">
        <Heading variant="display-strong-s">Daftar Quiz</Heading>

        <Row
          gap="m"
          wrap
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          }}
        >
          {filteredCourses.map((course: Quiz) => (
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

                <Heading variant="heading-strong-s">
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
