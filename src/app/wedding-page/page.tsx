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
    image: "/images/weddingicon/wed-01.jpg",
    person: 0,
    gifts: 0,
    href: "/wedding/andi-siti",
  },
  {
    id: "wedding-02",
    title: "Wedding Theme 2",
    couple: "Tema Minimalis",
    description: "Undangan Pernikahan dengan tema minimalis.",
    image: "/images/weddingicon/wed-02.jpg",
    person: 0,
    gifts: 0,
    href: "/wedding/budi-rina",
  },
  {
    id: "wedding-03",
    title: "Wedding Theme 3",
    couple: "Tema Adat Sunda",
    description: "Undangan Pernikahan dengan tema adat Sunda.",
    image: "/images/weddingicon/wed-03.jpg",
    person: 0,
    gifts: 0,
    href: "/wedding/dedi-maya",
  },
  {
    id: "wedding-04",
    title: "Wedding Theme 4",
    couple: "Tema Adat Jawa",
    description: "Undangan Pernikahan dengan tema adat Jawa.",
    image: "/images/weddingicon/wed-04.jpg",
    person: 0,
    gifts: 0,
    href: "/promo/special-wedding",
  },
  {
    id: "wedding-05",
    title: "Wedding Theme 5",
    couple: "Tema Modern",
    description: "Undangan Pernikahan dengan tema modern.",
    image: "/images/weddingicon/wed-05.jpg",
    person: 0,
    gifts: 0,
    href: "/promo/special-wedding",
  },
  {
    id: "wedding-06",
    title: "Wedding Theme 6",
    couple: "Tema Simpel dan Elegan",
    description: "Undangan Pernikahan dengan tema simpel nan elegan.",
    image: "/images/weddingicon/wed-01.jpg",
    person: 0,
    gifts: 0,
    href: "/promo/special-wedding",
  },
];

/* =======================
   PAGE
======================= */

export default function WeddingPage() {
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
      {/* ================= GRID ================= */}
      <Grid fillWidth maxWidth="xl" columns={3} gap="m">
        {weddingCards.map((card) => (
          <Card
            key={card.id}
            direction="column"
            radius="l-4"
            border="neutral-alpha-medium"
            cursor="interactive"
            onMouseEnter={() => router.prefetch(card.href)}
            onClick={() => openDialog(card)}   // ✅ FIXED
          >
            {/* HEADER */}
            <Row fillWidth paddingX="s" paddingY="xs" gap="xs" vertical="center">
/*              <Avatar size="m" src="/images/weddingicon/wed-01.jpg" /> */
              <Text variant="label-default-m">{card.title}</Text>
            </Row>

            {/* IMAGE */}
            <Media
              fillWidth
              aspectRatio="4 / 4"
              radius="l"
              src={card.image}
              alt={card.title}
            />

            {/* CONTENT */}
            <Column fillWidth padding="s" gap="xs">
              <Text variant="body-default-l">{card.couple}</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {card.description}
              </Text>
            </Column>

            <Line background="neutral-alpha-medium" />

            {/* FOOTER */}
            <Row
              padding="s"
              gap="xs"
              vertical="center"
              textVariant="label-default-s"
              onBackground="neutral-medium"
            >
              <Icon name="person" size="s" />
              {card.person}
              <Icon name="gift" size="s" />
              {card.gifts}
            </Row>
          </Card>
        ))}
      </Grid>

      {/* ================= DIALOG ================= */}
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Lihat undangan?"
        description="Kamu akan melihat detail undangan pernikahan"
      >
        {activeCard && (
          <Column gap="m">
            <Media
              src={activeCard.image}
              aspectRatio="16 / 10"
              radius="m"
            />

            <Heading size="s">{activeCard.couple}</Heading>

            <Text variant="body-default-s">
              {activeCard.description}
            </Text>

            <Row fillWidth horizontal="end" gap="s">
              <Button
                variant="secondary"
                onClick={() => setIsOpen(false)}
              >
                Kembali
              </Button>
              <Button onClick={goToWedding}>
                Oke mau liat 🚀
              </Button>
            </Row>
          </Column>
        )}
      </Dialog>
    </Column>
  );
}
