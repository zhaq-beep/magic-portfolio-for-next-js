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
    description:
      "Mainkan quiz sambil menambah ilmu✨",
    baseURL,
    path: "/",
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
export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="16" horizontal="center" >
      {/* SEO Schema */}
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/"
        title="Portal Quiz & Materi"
        description="Mainkan quiz sambil menambah Ilmu"
        image={`/api/og/generate?title=Portal%20Latihan%20Soal`}
        author={{
          name: person.name,
          url: baseURL,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* ======================
          HERO SECTION
      ====================== */}
      <Column horizontal="center" align="center" gap="m">
        <RevealFx>
          <Badge background="brand-alpha-weak" onBackground="brand-strong">
            ESTABLISHED ACADEMIC EXCELLENCE
          </Badge>
        </RevealFx>

        <RevealFx delay={0.1}>
          <Heading variant="display-strong-l" wrap="balance">
            Portal{" "}
            <span style={{ color: "var(--brand-strong)" }}>
              Latihan Soal
            </span>{" "}
            & Materi
          </Heading>
        </RevealFx>

        <RevealFx delay={0.2}>
          <Text
            variant="heading-default-xl"
            onBackground="neutral-weak"
            wrap="balance"
          >
            Kurasi database simulasi ujian dengan akurasi data tertinggi
          </Text>
        </RevealFx>
      </Column>

      {/* ======================
          SEARCH BAR
      ====================== */}
      <RevealFx delay={0.3} fillWidth horizontal="center">
        <Column maxWidth="s" fillWidth>
          <Input
            id="search-course"
            placeholder="Cari materi quiz"
          />

        </Column>
      </RevealFx>

      {/* ======================
          STATISTIC CARD
      ====================== */}
      <RevealFx delay={0.4}>
        <Column
          fillWidth
          background="neutral-alpha-weak"
          padding="32"
          radius="l"
          gap="12"
          horizontal="center"
          align="center"
        >
          <Badge background="success-alpha-weak" onBackground="success-strong">
            LIVE STATISTICS
          </Badge>

          <Heading variant="display-strong-m">112+</Heading>

          <Text onBackground="neutral-weak" align="center">
            Para Generus telah memainkan quiz ini
          </Text>

          <Row gap="24" marginTop="12">
            <Text size="s">✓ Authentic Data</Text>
            <Text size="s">✓ Secure Access</Text>
            <Text size="s">✓ High Accuracy</Text>
          </Row>
        </Column>
      </RevealFx>

      {/* ======================
          GRID MATA KULIAH
      ====================== */}
      <Column fillWidth gap="24" marginTop="40">
        <Heading variant="display-strong-xs">
          Materi Quiz
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
                    {course.modules} Modul tersedia
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
