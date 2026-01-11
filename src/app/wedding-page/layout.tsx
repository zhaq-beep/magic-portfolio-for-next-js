import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Page - Zhaq Project",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
