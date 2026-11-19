import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { ProjectsIndex } from "@/components/work/ProjectsIndex";
import { getPosts } from "@/utils/utils";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  const count = getPosts(["src", "app", "project", "projects"]).length;

  return (
    <Column maxWidth="l" paddingTop="24" paddingX="l" gap="48" s={{ paddingX: "16" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column gap="12" maxWidth="s">
        <Heading as="h1" variant="display-strong-m">
          Projects
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          {count} projects: learning materials, print designs, and web experiments made for Generus
          and Majelis Taklim.
        </Text>
      </Column>
      <ProjectsIndex />
    </Column>
  );
}
