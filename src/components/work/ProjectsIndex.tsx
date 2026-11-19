import Link from "next/link";
import { Column, Flex, Grid, Heading, Icon, Media, Row, SmartLink, Text } from "@once-ui-system/core";
import { getPosts } from "@/utils/utils";
import styles from "./ProjectsIndex.module.scss";

type Post = ReturnType<typeof getPosts>[number];

function formatMonth(date?: string) {
  if (!date) return "";
  const d = new Date(`${date.includes("T") ? date : `${date}T00:00:00Z`}`);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
}

function ProjectItem({
  post,
  featured = false,
  reverse = false,
  priority = false,
}: {
  post: Post;
  featured?: boolean;
  reverse?: boolean;
  priority?: boolean;
}) {
  const { title, summary, images, publishedAt, link } = post.metadata;
  const hasCaseStudy = Boolean(post.content?.trim());
  const href = `/project/${post.slug}`;

  const frame = (
    <div className={styles.frame}>
      <Media
        className={styles.image}
        src={images?.[0] ?? ""}
        alt={title}
        aspectRatio="3 / 2"
        priority={priority}
        sizes={featured ? "(max-width: 960px) 100vw, 700px" : "(max-width: 960px) 100vw, 560px"}
      />
    </div>
  );

  // The image links to the case study too, so the whole card is clickable
  // (the title link covers the text area). Hidden from keyboard/screen readers to avoid duplicates.
  const media = hasCaseStudy ? (
    <Link href={href} tabIndex={-1} aria-hidden="true" style={{ display: "block" }}>
      {frame}
    </Link>
  ) : (
    frame
  );

  const text = (
    <Column gap="12" flex={featured ? 5 : undefined} vertical={featured ? "center" : undefined}>
      <Text variant="label-default-s" onBackground="neutral-weak">
        {formatMonth(publishedAt)}
      </Text>
      <Heading as="h2" variant={featured ? "display-strong-xs" : "heading-strong-l"} wrap="balance">
        {hasCaseStudy ? (
          <Link href={href} className={styles.title}>
            {title}
          </Link>
        ) : (
          title
        )}
      </Heading>
      {summary?.trim() && (
        <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
          {summary}
        </Text>
      )}
      <Row gap="24" wrap marginTop="4">
        {hasCaseStudy && (
          <Text variant="label-strong-m" className={styles.cta}>
            Read case study
            <span className={styles.arrow}>
              <Icon name="arrowRight" size="xs" />
            </span>
          </Text>
        )}
        {link && (
          <span className={styles.external}>
            <SmartLink href={link} suffixIcon="arrowUpRightFromSquare">
              View project
            </SmartLink>
          </span>
        )}
      </Row>
    </Column>
  );

  if (featured) {
    return (
      <div className={styles.card}>
        <Flex
          fillWidth
          gap="32"
          direction={reverse ? "row-reverse" : "row"}
          s={{ direction: "column", gap: "16" }}
        >
          <Column flex={7}>{media}</Column>
          {text}
        </Flex>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <Column fillWidth gap="16">
        {media}
        {text}
      </Column>
    </div>
  );
}

export function ProjectsIndex() {
  const posts = getPosts(["src", "app", "project", "projects"]).sort((a, b) => {
    const byDate =
      new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    return byDate !== 0 ? byDate : a.metadata.title.localeCompare(b.metadata.title);
  });

  if (posts.length === 0) return null;

  const [featured, ...rest] = posts;
  // With an odd number of remaining projects, the last one gets a wide row so the grid has no gap.
  const wideLast = rest.length % 2 === 1 ? rest[rest.length - 1] : null;
  const gridItems = wideLast ? rest.slice(0, -1) : rest;

  return (
    <Column fillWidth gap="48" marginBottom="40">
      <ProjectItem post={featured} featured priority />
      {gridItems.length > 0 && (
        <Grid columns="2" s={{ columns: 1 }} gap="40" fillWidth>
          {gridItems.map((post, index) => (
            <ProjectItem key={post.slug} post={post} priority={index < 2} />
          ))}
        </Grid>
      )}
      {wideLast && <ProjectItem post={wideLast} featured reverse />}
    </Column>
  );
}
