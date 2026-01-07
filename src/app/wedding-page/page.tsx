import { Row, Card, Avatar } from "@once-ui-system/core"

export default function Page() {
  return (
    <Row maxWidth={24}>
      <Card
        radius="l-4"
        direction="column"
        border="neutral-alpha-medium"
      >
        <Row
          fillWidth
          paddingX="20"
          paddingY="20"
          gap="8"
          vertical="left"
        >
          <Avatar size="xs" src="/images/avatar.jpg" />
          <p>Wedding Page</p>
        </Row>
      </Card>
    </Row>
  )
}
