import {
  Avatar,
  Column,
  Heading,
  Icon,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
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
    {
      title: about.certificates.title,
      display: about.certificates.display,
      items: about.certificates.experiences.map((e) => e.company),
    },
    {
      title: about.projects.title,
      display: about.projects.display,
      items: about.projects.skills.map((s) => s.title),
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
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}

      <Row fillWidth s={{ direction: "column" }} horizontal="center">
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
              <Icon name="globe" onBackground="accent-weak" />
              {person.location}
            </Row>

            {person.languages?.length ? (
              <Row wrap gap="8">
                {person.languages.map((lang, i) => (
                  <Tag key={`${lang}-${i}`} size="l">
                    {lang}
                  </Tag>
                ))}
              </Row>
            ) : null}
          </Column>
        )}

        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          {/* INTRO */}
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>

            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {/* SOFT SKILLS */}
          {about.soft.display && (
            <>
              <Heading
                as="h2"
                id={about.soft.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.soft.title}
              </Heading>

              <Column fillWidth gap="l" marginBottom="xl">
                {about.soft.skills.map((skill, index) => (
                  <Column key={`${skill.title}-${index}`} fillWidth gap="4">
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>

                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>

                    {skill.tags?.length ? (
                      <Row wrap gap="8" paddingTop="8">
                        {skill.tags.map((tag, i) => (
                          <Tag
                            key={`${skill.title}-${i}`}
                            size="l"
                            prefixIcon={tag.icon}
                          >
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    ) : null}

                    {skill.images?.length ? (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, i) => (
                          <Row
                            key={`${skill.title}-img-${i}`}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    ) : null}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* PROJECTS */}
          {about.projects.display && (
            <>
              <Heading
                as="h2"
                id={about.projects.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.projects.title}
              </Heading>

              <Column fillWidth gap="l" marginBottom="xl">
                {about.projects.skills.map((skill, index) => (
                  <Column key={`${skill.title}-${index}`} fillWidth gap="4">
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>

                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
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
