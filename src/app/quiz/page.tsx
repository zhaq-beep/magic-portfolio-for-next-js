import {
  Heading,
  Text,
  Column,
  Row,
  Badge,
  RevealFx,
  Schema,
  Meta,
  Input,
} from "@once-ui-system/core";
import Link from "next/link";
import { baseURL, person } from "@/resources";

/* ======================
   METADATA
====================== */
export async function generateMetadata() {
  return Meta.generate({
    title: "Portal Quiz & Materi",
    description: "Mainkan quiz sambil menambah ilmu ✨",
    baseURL,
    path: "/quiz",
  });
}

/* ======================
   DATA DUMMY
====================== */
const courses = [
  {
    code: "MATA4101",
    title: "Pengetahuan Akidah",
    modules: 9,
  },
  {
    code: "MATA4112",
    title: "Hukum Tajwid",
    modules: 6,
  },
  {
    code: "EKMA4321",
    title: "29 Karakter Luhur",
    modules: 9,
  },
];

/* ======================
   PAGE
====================== */
export default function QuizPage() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="16" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/quiz"
        title="Portal Quiz & Materi"
        description="Mainkan quiz sambil menambah ilmu"
        author={{
          name: person.name,
          url: baseURL,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* HERO */}
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

      {/* SEARCH */}
      <RevealFx delay={0.3} fillWidth horizontal="center">
        <Column maxWidth="s" fillWidth>
          <Input placeholder="Cari materi quiz..." />
        </Column>
      </RevealFx>

      {/* GRID */}
      <Column fillWidth gap="24" marginTop="40">
        <Heading variant="display-strong-xs">
          Daftar Materi
        </Heading>

        <Row gap="24" wrap>
          {courses.map((course) => (
            <Column key={course.code} minWidth={260}>
              <Link href={`/quiz/${course.code}`}>
                <Column
                  padding="24"
                  radius="l"
                  background="neutral-alpha-weak"
                  border="neutral-alpha-medium"
                  gap="8"
                  style={{ cursor: "pointer" }}
                >
                  <Text size="s" onBackground="brand-strong">
                    {course.code}
                  </Text>

                  <Heading variant="heading-strong-m">
                    {course.title}
                  </Heading>

                  <Text size="s" onBackground="neutral-weak">
                    {course.modules} modul tersedia
                  </Text>
                </Column>
              </Link>
            </Column>
          ))}
        </Row>
      </Column>
    </Column>
  );
}
