import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Mufid",
  lastName: "Zhaqie",
  name: `Mufid Zhaqie`,
  role: "Muballigh",
  avatar: "/images/avatar.jpg",
  email: "mufidzhaqie8080@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/zhaq-beep",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/-/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/muadzz.17/",
    essential: true,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/-/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building projects that benefit the community</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    Hi, I am Zhaq, a Muballigh at one of Majelis Taklim in <Text as="span" size="xl" weight="strong">Depok City</Text>, where I craft intuitive <br /> user experiences. After hours, I build my own projects.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Mufid Zhaqie is a Muballigh at one of Majelis Taklim in Depok City with a passion
        for making a positive impact, being influential without being influenced, and providing simple
        and elegant design solutions. His work includes digital interfaces, interactive experiences,
        and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "Ponpes Wali Barokah Kediri",
        timeframe: "2022 - 2024",
        role: "Administration Secretary",
        achievements: [
          <>
            Organize a more efficient filing system and enhance the appearance of activity publications
            with appealing visual designs, displayed on the madin pondok.
          </>,
          <>
            Record all financial transactions into the system and
            report books in an orderly and systematic manner.
          </>,
          <>
            Ensure all received funds are deposited to the
            institution's staff safely, accurately, on time, neatly, and transparently.
          </>,
          <>
            Coordinate finances and implement the use of institutional funds
            according to applicable regulations
          </>,
          <>
            Archive letters and/or expenditure receipts neatly and orderly.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Zhaq Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Majelis Taklim Baitul Ihsan Depok",
        timeframe: "2024 - present",
        role: "Muballigh",
        achievements: [
          <>
            Developing interactive learning designs for Generus.
          </>,
          <>
            Helping the Generus to learn effectively and systematically.
          </>,
          <>
            Creating wall poster designs as a form of learning and knowledge.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Universitas Terbuka",
        description: <>Studied Information System.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Designer",
        description: (
          <>Able to design in Canva, CorelDRAW and Editing photos in Adobe Photoshop or Adobe Lightroom.</>
        ),
        tags: [
          {
            name: "Canva",
            icon: "canva",
          },
          {
            name: "CorelDRAW",
            icon: "coreldraw",
          },
          {
            name: "Adobe Photoshop",
            icon: "adobe-photoshop",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Copywriter",
        description: (
          <>Writing on social media platforms.</>
        ),
        tags: [
          {
            name: "Medium",
            icon: "medium",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
