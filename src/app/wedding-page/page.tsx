import { Row, Card, Avatar } from '@/once-ui/components'

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
          paddingY="12"
          gap="8"
          vertical="center"
        >
          <Avatar size="xs" src="/images/avatar.jpg" />
          <p>Wedding Page</p>
        </Row>
      </Card>
    </Row>
  )
}
