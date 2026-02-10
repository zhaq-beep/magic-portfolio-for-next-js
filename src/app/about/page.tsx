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
  const { intro, work, studies, technical, softskills, certificates } = about;

  // AMANKAN LANGUAGES
  const languages = Array.isArray(person.languages) ? person.languages : [];

  const structure = [
    {
      title: intro.title,
      display: intro.display,
      items: [],
    },
    {
      title: work.title,
      display: work.display,
      items: work.experiences.map((experience) => experience.company),
    },
    {
      title: studies.title,
      display: studies.display,
      items: studies.institutions.map((institution) => institution.name),
    },
    {
      title: technical.title,
      display: technical.display,
      items: technical.skills.map((skill) => skill.title),
    },
    {
      title: softskills.title,
      display: softskills.display,
      items: softskills.skills.map((skill) => skill.title),
    },
    {
      title: certificates.title,
      display: certificates.display,
      items: certificates.experiences.map((exp) => exp.company),
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

            {languages.length > 0 && (
              <Row wrap gap="8">
                {languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}

        <Column className={styles.blockAlign} flex={9} maxWidth={40}>

          {/* INTRO */}
          {intro.display && (
            <Column
              id={intro.title}
              textVariant="body-default-l"
              fillWidth
              gap="m"
              marginBottom="xl"
            >
              {intro.description}
            </Column>
          )}

          {/* WORK */}
          {work.display && (
            <>
              <Heading as="h2" id={work.title} variant="display-strong-s" marginBottom="m">
                {work.title}
              </Heading>

              <Column fillWidth gap="l" marginBottom="40">
                {work.experiences.map((experience, index) => (
                  <Column key={index} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>

                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>

                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>

                    {Array.isArray(experience.achievements) && (
                      <Column as="ul" gap="16">
                        {experience.achievements.map((achievement, i) => (
                          <Text as="li" key={i} variant="body-default-m">
                            {achievement}
                          </Text>
                        ))}
                      </Column>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* STUDIES */}
          {studies.display && (
            <>
              <Heading as="h2" id={studies.title} variant="display-strong-s" marginBottom="m">
                {studies.title}
              </Heading>

              <Column fillWidth gap="l" marginBottom="40">
                {studies.institutions.map((institution, index) => (
                  <Column key={index} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>

                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* TECHNICAL */}
          {technical.display && (
            <>
              <Heading as="h2" id={technical.title} variant="display-strong-s" marginBottom="40">
                {technical.title}
              </Heading>

              <Column fillWidth gap="l">
                {technical.skills.map((skill, index) => (
                  <Column key={index} fillWidth gap="4">
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

          {/* SOFTSKILLS */}
          {softskills.display && (
            <>
              <Heading as="h2" id={softskills.title} variant="display-strong-s" marginTop="40" marginBottom="40">
                {softskills.title}
              </Heading>

              <Column fillWidth gap="l">
                {softskills.skills.map((skill, index) => (
                  <Column key={index} fillWidth gap="4">
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

          {/* CERTIFICATES */}
          {certificates.display && (
            <>
              <Heading
                as="h2"
                id={certificates.title}
                variant="display-strong-s"
                marginTop="40"
                marginBottom="40"
              >
                {certificates.title}
              </Heading>

              <Column fillWidth gap="l" marginBottom="40">
                {certificates.experiences.map((cert, index) => (
                  <Column key={index} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={cert.company} variant="heading-strong-l">
                        {cert.company}
                      </Text>

                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {cert.timeframe}
                      </Text>
                    </Row>

                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {cert.role}
                    </Text>

                    {Array.isArray(cert.achievements) && (
                      <Column as="ul" gap="16">
                        {cert.achievements.map((a, i) => (
                          <Text as="li" key={i} variant="body-default-m">
                            {a}
                          </Text>
                        ))}
                      </Column>
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
