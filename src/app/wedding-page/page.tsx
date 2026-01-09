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
    title: "Wedding Theme 01",
    description:
      "A planet so cruel on the surface, but once you explore what's underneath, you'll question everything you know.",
    image: "/images/projects/project-01/avatar-01.jpg",
    likes: 34,
    gifts: 5,
  },
  {
    title: "Wedding Theme 02",
    description:
      "A calm and elegant theme designed for intimate wedding ceremonies.",
    image: "/images/projects/project-01/avatar-01.jpg",
    likes: 21,
    gifts: 3,
  },
];

export default function WeddingPage() {
  return (
    <main>
      <h2>Wedding Page</h2>
      
      <Row maxWidth={24} gap="24">
        {weddingCards.map((card, index) => (
          <Card
          key={index}
          radius="s-4"
          direction="column"
          border="neutral-alpha-medium"
        >
          <Row fillWidth paddingX="20" paddingY="12" gap="8" vertical="center">
            <Avatar size="m" src="/images/avatar-01.jpg" />
            <Text variant="label-default-s">Zhaq Wedding</Text>
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
            <Text variant="body-default-xl">Wedding Theme 01</Text>
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
            {card.count1}
            <Icon name="gift"
              size="s"
              onBackground="neutral-strong"
              marginLeft="24"
            />
            {card.count2}
          </Row>
      </Card>
    ))}
  </Row>
