"use client";

import { useMemo, useState } from "react";
import { Chip, Column, Grid, Heading, Line, Media, Row, SmartLink, Text } from "@once-ui-system/core";
import { gallery } from "@/resources";
import type { Certificate } from "@/types";

const ALL = "All";
const UNDATED = "undated";

function monthKey(date?: string) {
  return date ? date.slice(0, 7) : UNDATED;
}

function monthLabel(key: string) {
  if (key === UNDATED) return "No date listed";
  const [year, month] = key.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, 1)).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function GalleryView() {
  const [active, setActive] = useState<string>(ALL);
  const { certificates } = gallery;

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const item of certificates) {
      counts.set(item.category, (counts.get(item.category) ?? 0) + 1);
    }
    return Array.from(counts.entries());
  }, [certificates]);

  const groups = useMemo(() => {
    const visible = certificates
      .filter((item) => active === ALL || item.category === active)
      .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));

    const byMonth = new Map<string, Certificate[]>();
    for (const item of visible) {
      const key = monthKey(item.date);
      const list = byMonth.get(key);
      if (list) {
        list.push(item);
      } else {
        byMonth.set(key, [item]);
      }
    }
    return Array.from(byMonth.entries());
  }, [certificates, active]);

  return (
    <Column fillWidth gap="32" paddingBottom="40">
      <Column gap="8">
        <Heading as="h1" variant="display-strong-s">
          {gallery.label}
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {certificates.length} courses and trainings. Select an image to view the full certificate.
        </Text>
      </Column>

      <Row gap="8" wrap role="group" aria-label="Filter certificates by topic">
        <Chip
          label={`${ALL} (${certificates.length})`}
          selected={active === ALL}
          onClick={() => setActive(ALL)}
        />
        {categories.map(([name, count]) => (
          <Chip
            key={name}
            label={`${name} (${count})`}
            selected={active === name}
            onClick={() => setActive(name)}
          />
        ))}
      </Row>

      <Column fillWidth gap="40">
        {groups.map(([key, items]) => (
          <Column key={key} fillWidth gap="16">
            <Column fillWidth gap="8">
              <Heading as="h2" variant="heading-strong-l">
                {monthLabel(key)}
              </Heading>
              <Line background="neutral-alpha-medium" />
            </Column>
            <Grid columns="2" s={{ columns: 1 }} gap="16" fillWidth>
              {items.map((item) => (
                <Column key={item.src} fillWidth gap="12">
                  <Media
                    enlarge
                    src={item.src}
                    alt={`Certificate: ${item.title}, ${item.issuer}`}
                    aspectRatio="3 / 2"
                    objectFit="contain"
                    radius="l"
                    border="neutral-alpha-weak"
                    background="neutral-alpha-weak"
                    sizes="(max-width: 560px) 100vw, 50vw"
                  />
                  <Column paddingX="4" gap="4">
                    <Text variant="heading-strong-m" wrap="balance">
                      {item.title}
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {item.issuer}
                    </Text>
                    {item.detail && (
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {item.detail}
                      </Text>
                    )}
                    {item.verifyUrl && (
                      <SmartLink
                        href={item.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        suffixIcon="arrowUpRightFromSquare"
                      >
                        Verify credential
                      </SmartLink>
                    )}
                  </Column>
                </Column>
              ))}
            </Grid>
          </Column>
        ))}
      </Column>
    </Column>
  );
}
