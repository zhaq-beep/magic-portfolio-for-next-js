"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
  Grid,
} from "@once-ui-system/core";

/* =======================
   DATA
======================= */

type WeddingCard = {
  id: string;
  title: string;
  couple: string;
  description: string;
  image: string;
  person: number;
  gifts: number;
  href: string;
};

const weddingCards: WeddingCard[] = [
  {
    id: "wedding-01",
    title: "Wedding Theme 1",
    couple: "Tema Klasik Bunga",
    description: "Undangan Pernikahan dengan tema klasik.",
    image: "/images/wedding-01.jpg",
    person: 0,
    gifts: 0,
    href: "/wedding/andi-siti",
  },
  {
    id: "wedding-02",
    title: "Wedding Theme 2",
    couple: "Tema Minimalis",
    description: "Undangan Pernikahan dengan tema minimalis.",
    image: "/images/wedding-02.jpg",
    person: 0,
    gifts: 0,
    href: "/wedding/budi-rina",
  },
];

/* =======================
   PAGE
======================= */

export default function Page() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<WeddingCard | null>(null);

  const openDialog = (card: WeddingCard) => {
    setActiveCard(card);
    setIsOpen(true);
  };

  const goToWedding = () => {
    if (!activeCard) return;
    setIsOpen(false);
    router.push(activeCard.href);
  };

  return (
    <Column as="main" fillWidth padding="l" gap="l">
      <Grid fillWidth maxWidth="xl" columns={3} gap="m">
        {weddingCards.map((card) => (
          <Card
            key={card.id}
            direction="column"
            radius="l-4"
            border="neutral-alpha-medium"
            cursor="interactive"
            onClick={() => openDialog(card)}
          >
            <Row fillWidth paddingX="s" paddingY="xs" gap="xs" vertical="center">
              <Avatar size="m" src="/images/avatar.jpg" />
              <Text variant="label-default-m">{card.title}</Text>
            </Row>

            <Media
              fillWidth
              aspectRatio="16 / 10"
              radius="l"
              src={card.image}
              alt={card.title}
            />

            <Column fillWidth padding="s" gap="xs">
              <Text variant="body-default-l">{card.couple}</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {card.description}
              </Text>
            </Column>

            <Line background="neutral-alpha-medium" />

            <Row padding="s" gap="xs" vertical="center">
              <Icon name="person" size="s" />
              {card.person}
              <Icon name="gift" size="s" />
              {card.gifts}
            </Row>
          </Card>
        ))}
      </Grid>

      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Lihat undangan?"
        description="Kamu akan melihat detail undangan pernikahan"
      >
        {activeCard && (
          <Column gap="m">
            <Media src={activeCard.image} aspectRatio="16 / 10" radius="m" />
            <Heading size="s">{activeCard.couple}</Heading>
            <Text>{activeCard.description}</Text>

            <Row fillWidth horizontal="end" gap="s">
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Kembali
              </Button>
              <Button onClick={goToWedding}>Oke mau liat 🚀</Button>
            </Row>
          </Column>
        )}
      </Dialog>
    </Column>
  );
}
