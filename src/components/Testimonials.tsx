"use client"

import { BlockQuote, Text, AutoScroll } from "@once-ui-system/core"

export default function Testimonials() {
  const items = [
    {
      text: "Masyaalloh, gud banget programnya.",
      name: "Rinto",
      avatar: "/images/icon.jpg",
    },
    {
      text: "Tadi nyoba, asli bagus ini.",
      name: "Rigan",
      avatar: "/images/icon.jpg",
    },
  ]

  return (
    <AutoScroll speed="medium" paddingY="24" gap="32">
      {items.map((item, i) => (
        <div key={i} style={{ minWidth: "340px" }}>
          <BlockQuote
            separator="none"
            author={{
              name: item.name,
              avatar: item.avatar,
            }}
          >
            <Text variant="heading-default-l">
              “{item.text}”
            </Text>
          </BlockQuote>
        </div>
      ))}
    </AutoScroll>
  )
}
