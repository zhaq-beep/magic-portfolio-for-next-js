export default function WeddingPage() {
  return (
    <Column as="main" fillWidth paddingY="l" paddingX="m">
      <Row
        fillWidth
        maxWidth="xl"
        gap="m"
        wrap
        horizontal="center"
      >
        {weddingCards.map((card) => (
          <Card
            key={card.id}
            className="wedding-card"
            radius="l-4"
            direction="column"
            border="neutral-alpha-medium"
            minWidth="m"
          >
            <Row
              fillWidth
              paddingX="m"
              paddingY="s"
              gap="xs"
              vertical="center"
            >
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

            <Column
              fillWidth
              paddingX="m"
              paddingY="l"
              gap="xs"
            >
              <Text variant="body-default-xl">{card.couple}</Text>
              <Text onBackground="neutral-weak" variant="body-default-s">
                {card.description}
              </Text>
            </Column>

            <Line background="neutral-alpha-medium" />

            <Row
              paddingX="m"
              paddingY="s"
              gap="xs"
              vertical="center"
              textVariant="label-default-s"
              onBackground="neutral-medium"
            >
              <Icon name="like" size="s" aria-label="Likes" />
              {card.likes}
              <Icon
                name="gift"
                size="s"
                marginLeft="l"
                aria-label="Gifts"
              />
              {card.gifts}
            </Row>
          </Card>
        ))}
      </Row>
    </Column>
  );
}
