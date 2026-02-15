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
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
    {
      title: about.soft.title,
      display: about.soft.display,
      items: about.soft.skills.map((skill) => skill.title),
    },
    {
      title: about.certificates.title,
      display: about.certificates.display,
      items: about.certificates.experiences.map((experience) => experience.company),
    },
    {
      title: about.projects.title,
      display: about.projects.display,
      items: about.projects.skills.map((project) => project.title),
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

            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((lang, i) => (
                  <Tag key={`${lang}-${i}`} size="l">
                    {lang}
                  </Tag>
                ))}
              </Row>
            )}
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

          {/* WORK */}
          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="m">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
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
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, index) => (
                          <Row
                            key={index}
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
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* STUDIES */}
          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="xl">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
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

          {/* TECHNICAL SKILLS */}
          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="xl">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4">
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                    {skill.images && skill.images.length > 0 && (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Row
                            key={index}
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
                    )}
                  </Column>
                ))}
              </Column>
            </>
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

          {/* CERTIFICATES */}
          {about.certificates.display && (
          <>
    <Heading
      as="h2"
      id={about.certificates.title}
      variant="display-strong-s"
      marginBottom="m"
    >
      {about.certificates.title}
    </Heading>

    <Column fillWidth gap="l" marginBottom="m">
      {about.certificates.experiences.map((experience, index) => (
        <Column
          key={`${experience.company}-${index}`}
          fillWidth
        >
          <Row fillWidth horizontal="between" vertical="end" marginBottom="2">
            <Text id={experience.company} variant="heading-strong-l">
              {experience.company}
            </Text>

            <Text variant="heading-default-xs" onBackground="neutral-weak">
              {experience.timeframe}
            </Text>
          </Row>

          <Text
            variant="body-default-s"
            onBackground="brand-weak"
            marginBottom="s"
          >
            {experience.role}
          </Text>

          {experience.achievements?.length ? (
            <Column as="ul" gap="16">
              {experience.achievements.map((achievement, i) => (
                <Text
                  as="li"
                  variant="body-default-m"
                  key={`cert-ach-${index}-${i}`}
                >
                  {achievement}
                </Text>
              ))}
            </Column>
          ) : null}

          {experience.images?.length ? (
            <Row
              fillWidth
              paddingTop="m"
              paddingLeft="40"
              gap="12"
              wrap
            >
              {experience.images.map((image, i) => (
                <Row
                  key={`cert-img-${index}-${i}`}
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

    <Column fillWidth gap="l" marginBottom="l">
      {about.projects.skills.map((project, index) => (
        <Column
          key={`${project.title}-${index}`}
          fillWidth
          gap="4"
        >
          <Text id={project.title} variant="heading-strong-l">
            {project.title}
          </Text>

          {project.description ? (
            <Text variant="body-default-m" onBackground="neutral-weak">
              {project.description}
            </Text>
          ) : null}
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
