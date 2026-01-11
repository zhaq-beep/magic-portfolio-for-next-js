import { headers } from "next/headers";
import { resolvePage } from "@/resources/resolvePage";
import { Meta } from "@once-ui-system/core";

export async function generateMetadata() {
  const pathname =
    headers().get("x-pathname") || "/";

  const page = resolvePage(pathname);

  return Meta.generate({
    title: page.title,
    description: page.description,
    baseURL: baseURL,
    path: page.path,
    image: page.image,
  });
}
