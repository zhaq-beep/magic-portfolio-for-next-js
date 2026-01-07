import { Row, Card, Avatar } from "@once-ui-system/core"

export default function Page() {
  return (
    <Row maxWidth={24}>
      <Card
        radius="l-4"
        direction="column"
        border="neutral-alpha-medium"
      >
      <Media
      border="neutral-alpha-weak"
      sizes="400px"
      fillWidth
      aspectRatio="4 / 3"
      radius="l"
      alt="Proxima b"
      src="/images/horizontal-1.jpg"
      />
      <Row
          fillWidth
          paddingX="20"
          paddingY="20"
          gap="8"
          vertical="center"
        >
          <Avatar size="xs" src="/images/horizontal-1.jpg" />
          <p>Wedding Page</p>
        </Row>
      </Card>
    </Row>
  )
}
