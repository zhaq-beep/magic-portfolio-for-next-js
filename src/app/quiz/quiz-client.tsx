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
  { code: "AKD101", title: "Pengetahuan Akidah", modules: 9 },
  { code: "TJW201", title: "Hukum Tajwid", modules: 6 },
  { code: "AKH301", title: "29 Karakter Luhur", modules: 9 },
  { code: "SLT101", title: "Solat", modules: 10 },
  { code: "FQH210", title: "Fiqih Ibadah", modules: 8 },
  { code: "SIJ110", title: "Sirah Nabawiyah", modules: 7 },
];

/* ======================
   CLIENT UI
====================== */
export default function QuizClient() {
  const [query, setQuery] = useState("");

  const filteredCourses = courses.filter(
    (c) =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.code.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Column maxWidth="xl" gap="xl" paddingY="16" horizontal="center">
      {/* ================= HERO ================= */}
      <Column horizontal="center" align="center" gap="m">
        <RevealFx>
          <Badge background="brand-alpha-weak" onBackground="brand-strong">
            QUIZ CENTER
          </Badge>
        </RevealFx>

        <RevealFx delay={0.1}>
          <Heading variant="display-strong-l">
            Portal <span style={{ color: "var(--brand-strong)" }}>Quiz</span>
          </Heading>
        </RevealFx>

        <RevealFx delay={0.2}>
          <Text onBackground="neutral-weak" align="center">
            Pilih materi untuk mulai mengerjakan quiz
          </Text>
        </RevealFx>
      </Column>

      {/* ================= SEARCH ================= */}
      <RevealFx delay={0.3} fillWidth>
        <Column maxWidth="s" fillWidth>
          <Input
            id="search-quiz"
            placeholder="Cari materi atau kode..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Column>
      </RevealFx>

      {/* ================= GRID ================= */}
      <Column fillWidth gap="24" marginTop="40">
        <Heading variant="display-strong-xs">Daftar Materi</Heading>

        <Row
          gap="24"
          wrap
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          }}
        >
          {filteredCourses.map((course, i) => (
            <RevealFx key={course.code} delay={i * 0.05}>
              <Link href={`/quiz/${course.code}`} style={{ textDecoration: "none" }}>
                <Column
                  padding="24"
                  radius="l"
                  gap="m"
                  background="neutral-alpha-weak"
                  border="neutral-alpha-medium"
                  style={{
                    height: "100%",
                    cursor: "pointer",
                    transition: "transform .25s ease, box-shadow .25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 40px rgba(0,0,0,.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Row align="center" gap="10">
                    <Column padding="8" radius="s" background="brand-alpha-weak">
                      📘
                    </Column>
                    <Text size="xs" onBackground="brand-strong">
                      {course.code}
                    </Text>
                  </Row>

                  <Heading variant="heading-strong-m">
                    {course.title}
                  </Heading>

                  <Text size="xs" onBackground="neutral-weak">
                    ⏱ {course.modules} Modul Tersedia
                  </Text>
                </Column>
              </Link>
            </RevealFx>
          ))}

          {filteredCourses.length === 0 && (
            <Text onBackground="neutral-weak">
              Materi tidak ditemukan 😔
            </Text>
          )}
        </Row>
      </Column>
    </Column>
  );
}
