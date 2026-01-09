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
    title: "Wedding Theme 1",
    description:
      "Undangan Pernikahan dengan tema classic modern.",
    image: "/images/wedding-01.jpg",
    likes: 34,
    gifts: 5,
  },
  {
    title: "Wedding Theme 2",
    description:
      "Undangan Pernikahan simpel dan indah.",
    image: "/images/wedding-02.jpg",
    likes: 21,
    gifts: 3,
  },
  {
    title: "Wedding Theme 3",
    description:
      "Undangan Pernikahan dengan tema adat sunda.",
    image: "/images/wedding-03.jpg",
    likes: 30,
    gifts: 6,
  },
];

export default function WeddingPage() {
  return (
    <main>
      <h2>Pilih tema kamu</h2>
      
      <Row fillWidth maxWidth={24} gap={{ base: "16", md: "40" }} wrap>
        {weddingCards.map((card, index) => (
        <Card
        key={index}
        radius="m"
        direction="column"
        border="neutral-alpha-medium"
        paddingX="8"
        paddingY="8"
        width={{ base: 12, md: 8 }}
    >

          <Row fillWidth paddingX="20" paddingY="12" gap="8" vertical="center">
            <Avatar size="m" src="/images/avatar.jpg" />
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
            <Text variant="body-default-l">Zhaq Wedding</Text>
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
            <Icon name="sparkle"
              size="s"
              onBackground="neutral-strong" />
            {card.likes}
            <Icon name="gift"
              size="s"
              onBackground="neutral-strong"
              marginLeft="24"
            />
            {card.gifts}
            </Row>
          </Card>
        ))}
      </Row>
    </main>
  );
}
