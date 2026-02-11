"use client";

import dynamic from "next/dynamic";

const Carousel = dynamic(
  () => import("@once-ui-system/core").then((m) => m.Carousel),
  { ssr: false }
);

export default Carousel;
