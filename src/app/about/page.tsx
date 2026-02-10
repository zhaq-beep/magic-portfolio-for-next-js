import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {

  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((e) => e.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((i) => i.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((s) => s.title),
    },
    {
      title: about.soft.title,
      display: about.soft.display,
      items: about.soft.skills.map((s) => s.title),
    },
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}

      <Row fillWidth s={{ direction: "column" }} horizontal="center">

        {/* ========== AVATAR ========== */}
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />

            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Row>

            {person.languages?.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}

        {/* ========== MAIN CONTENT ========== */}
        <Column className={styles.blockAlign} flex={9} maxWidth={640} paddingX="xl">

          {/* ===== INTRO ===== */}
          {about.intro.display && (
            <Column id={about.intro.title} fillWidth gap="m" marginBottom="xl">
              <Heading variant="display-strong-xl">
                {person.name}
              </Heading>

              <Text variant="display-default-xs" onBackground="neutral-weak">
                {person.role}
              </Text>

              <Column textVariant="body-default-l" marginTop="m">
                {about.intro.description}
              </Column>
            </Column>
          )}

          {/* ===== WORK ===== */}
          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>

              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((exp, index) => (
                  <Column key={index} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end">
                      <Text id={exp.company} variant="heading-strong-l">
                        {exp.company}
                      </Text>

                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {exp.timeframe}
                      </Text>
                    </Row>

                    <Text variant="body-default-s" onBackground="brand-weak">
                      {exp.role}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* ===== STUDIES ===== */}
          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>

              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((ins, index) => (
                  <Column key={index}>
                    <Text id={ins.name} variant="heading-strong-l">
                      {ins.name}
                    </Text>

                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {ins.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* ===== TECHNICAL ===== */}
          {about.technical.display && (
            <>
              <Heading as="h2" id={about.technical.title} variant="display-strong-s" marginBottom="40">
                {about.technical.title}
              </Heading>

              <Column fillWidth gap="l">
                {about.technical.skills.map((skill, index) => (
                  <Column key={index} gap="4">
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>

                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>

                    {skill.tags?.length > 0 && (
                      <Row wrap gap="8">
                        {skill.tags.map((tag, i) => (
                          <Tag key={i} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* ===== SOFT ===== */}
          {about.soft.display && (
            <>
              <Heading as="h2" id={about.soft.title} variant="display-strong-s" marginTop="80">
                {about.soft.title}
              </Heading>

              <Column fillWidth gap="l">
                {about.soft.skills.map((skill, index) => (
                  <Column key={index} gap="4">
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>

                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>

                    {skill.tags?.length > 0 && (
                      <Row wrap gap="8">
                        {skill.tags.map((tag, i) => (
                          <Tag key={i} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

        </Column>
      </Row>
    </Column>
  );
}
