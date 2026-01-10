import {
  Row,
  Card,
  Avatar,
  Text,
  Media,
  Column,
  Line,
  Icon,
} from "@once-ui-system/core";

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
    couple: "Dedi & Maya",
    description: "Undangan Pernikahan dengan tema adat sunda.",
    image: "/images/wedding-03.jpg",
    likes: 30,
    gifts: 6,
  },
];

export default function WeddingPage() {
  return (
    <Column as="main" fillWidth paddingY="32" paddingX="24">
      <Row
        fillWidth
        maxWidth="xl"
        gap="24"
        wrap
        horizontal="center"
      >
        {weddingCards.map((card) => (
          <Card
            key={card.id}
            radius="l-4"
            direction="column"
            border="neutral-alpha-medium"
            minWidth="m"
            style={{ flex: "1 1 calc(50% - 12px)", maxWidth: "450px" }}
          >
            <Row fillWidth paddingX="20" paddingY="12" gap="8" vertical="center">
              <Avatar size="xs" src="/images/avatar.jpg" />
              <Text variant="label-default-s">{card.title}</Text>
            </Row>
            <Media
              border="neutral-alpha-weak"
              sizes="400px"
              fillWidth
              aspectRatio="4 / 3"
              radius="l"
              alt={card.title}
              src={card.image}
            />
            <Column fillWidth paddingX="20" paddingY="24" gap="8">
              <Text variant="body-default-xl">{card.couple}</Text>
              <Text onBackground="neutral-weak" variant="body-default-s">
                {card.description}
              </Text>
            </Column>
            <Line background="neutral-alpha-medium" />
            <Row
              paddingX="20"
              paddingY="12"
              gap="8"
              vertical="center"
              textVariant="label-default-s"
              onBackground="neutral-medium"
            >
              <Icon name="like" size="s" aria-label="Likes" />
              {card.likes}
              <Icon name="gift" size="s" marginLeft="24" aria-label="Gifts" />
              {card.gifts}
            </Row>
          </Card>
        ))}
      </Row>
    </Column>
  );
}
