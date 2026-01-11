"use client";

import {
  Row,
  Card,
  Avatar,
  Text,
  Media,
  Column,
  Line,
  Icon,
  Dialog,
  Button,
  Heading,
} from "@once-ui-system/core";
import "@/components/Card.module.scss";
import { useState } from "react";

const weddingCards = [
  {
    id: "wedding-01",
    title: "Wedding Theme 1",
    couple: "Andi & Siti",
    description: "Undangan Pernikahan dengan tema classic modern.",
    image: "/images/wedding-01.jpg",
    likes: 34,
    gifts: 5,
  },
  {
    id: "wedding-02",
    title: "Wedding Theme 2",
    couple: "Budi & Rina",
    description: "Undangan Pernikahan simpel dan indah.",
    image: "/images/wedding-02.jpg",
    likes: 21,
    gifts: 3,
  },
  {
    id: "wedding-03",
    title: "Wedding Theme 3",
    couple: "Budi & Rina",
    description: "Undangan Pernikahan simpel dan indah.",
    image: "/images/wedding-02.jpg",
    likes: 21,
    gifts: 3,
  },
  {
    id: "wedding-04",
    title: "Wedding Theme 4",
    couple: "Zaki & Who?",
    description: "Undangan Pernikahan dengan tema adat sunda.",
    image: "/images/wedding-01.jpg",
    likes: 100,
    gifts: 100,
  },
];

export default function WeddingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<any>(null);

  return (
    <Column as="main" fillWidth paddingY="l" paddingX="m">
      {/* CARD GRID */}
      <Row fillWidth maxWidth="xl" gap="xs" wrap>
        {weddingCards.map((card) => (
          <Column key={card.id} s={{ fillWidth: true }}>
            <Card
              className="wedding-card"
              radius="l-4"
              direction="column"
              border="neutral-alpha-medium"
              onClick={() => {
                setActiveCard(card);
                setIsOpen(true);
              }}
            >
              {/* HEADER */}
              <Row
                fillWidth
                paddingX="s"
                paddingY="xs"
                gap="xs"
                vertical="center"
              >
                <Avatar size="m" src="/images/avatar.jpg" />
                <Text variant="label-default-m">{card.title}</Text>
              </Row>

              {/* IMAGE */}
              <Media
                fillWidth
                sizes="400px"
                aspectRatio="4 / 3"
                radius="l"
                border="neutral-alpha-weak"
                alt={card.title}
                src={card.image}
              />

              {/* CONTENT */}
              <Column fillWidth paddingX="s" paddingY="m" gap="xs">
                <Text variant="body-default-xl">{card.couple}</Text>
                <Text
                  variant="body-default-s"
                  onBackground="neutral-weak"
                >
                  {card.description}
                </Text>
              </Column>

              <Line background="neutral-alpha-medium" />

              {/* FOOTER */}
              <Row
                paddingX="m"
                paddingY="s"
                gap="xs"
                vertical="center"
                textVariant="label-default-s"
                onBackground="neutral-medium"
              >
                <Icon name="like" size="s" marginLeft="m" />
                {card.likes}
                <Icon name="gift" size="s" marginLeft="m" />
                {card.gifts}
              </Row>
            </Card>
          </Column>
        ))}
      </Row>

      {/* DIALOG */}
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Mau liat tampilannya?👀"
        description="Kamu akan melihat detail undangan pernikahan🚀"
      >
        {activeCard && (
          <Column fillWidth gap="12">
            <Media
              src={activeCard.image}
              aspectRatio="4 / 3"
              radius="m"
            />

            <Heading size="s">{activeCard.couple}</Heading>

            <Text
              variant="body-default-s"
              onBackground="neutral-weak"
            >
              {activeCard.description}
            </Text>

            <Row fillWidth gap="8" horizontal="end">
              <Button
                variant="secondary"
                onClick={() => setIsOpen(false)}
              >
                Kembali
              </Button>

              <Button
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = `/wedding/${activeCard.id}`;
                }}
              >
                Oke mau liat🚀
              </Button>
            </Row>
          </Column>
        )}
      </Dialog>
    </Column>
  );
}
