import Image from "next/image";
import { Row, Card, Avatar } from "@once-ui-system/core"

export default function Page() {
  return (
    <Row maxWidth={24}>
      <Card
        radius="l-4"
        direction="column"
        border="neutral-alpha-medium"
      >
    <Image
        src="/images/horizontal-1.jpg"
        alt="Wedding"
        width={400}
        height={300}
        sizes="400px"
        style={{
        width: "100%",
        height: "auto",
        borderRadius: 12,
        border: "1px solid rgba(0,0,0,0.1)",
        aspectRatio: "4 / 3",
        }}
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
