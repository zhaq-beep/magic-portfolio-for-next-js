import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Page",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
