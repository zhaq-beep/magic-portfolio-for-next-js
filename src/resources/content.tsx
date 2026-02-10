import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Mufid",
  lastName: "Zhaqie",
  name: `Zhaq Project`,
  role: "Muballigh",
  avatar: "/images/avatar.jpg",
  email: "mufidzhaqie8080@gmail.com",
  location: "Asia/Jakarta",
  languages: ["Indonesia", "English"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/zhaq-beep/",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/mufid-zhaqie/",
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
    link: "https://www.threads.com/@once_ui",
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
  headline: <>Building bridges between design and code</>,
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
    href: "/work/poster-dinding",
  },
  subline: (
    <>
      I'm Zhaq, a design engineer at{" "}
      <Text as="span" size="xl" weight="strong">
        ONCE UI
      </Text>
      , where I craft intuitive <br /> user experiences. After hours, I build my own projects.
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
        Mufid Zhaqie is a Muballigh at one of Majelis Taklim in Depok City with a passion for making a positive impact,
        being influential without being influenced, and providing simple and elegant design solutions.
        His work includes digital interfaces, interactive experiences, and the convergence of design and technology..
      </>
    ),
  },

  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Magang/PKL",
        timeframe: "Oct - Nov 2018",
        role: "PLN UPDL (Unit Pelaksana Pendidikan dan Pelatihan) Bogor",
        achievements: [
          <>
            Participating in the daily activities of the implementing unit.
          </>,
          <>  
            Scanning or digitizing documents using a scanner.
          </>,
          <>
           Responsible for printing document files using a printer, to produce files for office needs and making copies using a photocopier.
          </>,
          <>
            Implementing general TIK in the field of work.
          </>,
        ],
      },
      {
        company: "Ponpes Wali Barokah Kediri",
        timeframe: "Mar 2022 - Mar 2024",
        role: "Administration Secretary",
        achievements: [
          <>
            Organize a more efficient filing system and enhance the appearance of activity publications with appealing visual designs,
            displayed on the madin pondok.
          </>,
          <>
            Record all financial transactions into the system and report books in an orderly and systematic manner.
          </>,
          <>
            Ensure all received funds are deposited to the institution's staff safely, accurately, on time, neatly, and transparently.
          </>,
          <>
            Coordinate finances and implement the use of institutional funds according to applicable regulations
          </>,
          <>
            Archive letters and/or expenditure receipts neatly and orderly.
          </>,
        ],
        images: [],
      },
      {
        company: "Majelis Taklim Baitul Ihsan Depok",
        timeframe: "May 2024 - Present",
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
          </>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Univ. xxxxxxxxx",
        description: <>Studied xxxxxxxx.</>,
      },
      {
        name: "Build the Project",
        description: <>Studied online and personal branding.</>,
      },
    ],
  },

  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Design Graphic",
        description: <>Able to design in Canva and CorelDRAW.
          Editing photos in Adobe Photoshop or Adobe Lightroom on PC. Using PixelLab, Picsay and InShot on Mobile.</>,
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
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
        title: "Photographer",
        description: <>Photography Enthusiast.</>,
        images: [],
      },
    ],
  },

  // ➤ BAGIAN WAJIB YANG TADI KURANG
  soft: {
    display: true,
    title: "Soft Skills",
    skills: [
      {
        title: "Communication",
        description: <>Able to communicate effectively with others.</>,
      },
      {
        title: "Team Work",
        description: <>Comfortable working in collaborative environments.</>,
      },
    ],
  },

  certificates: {
    display: false,
    title: "Certificates",
    experiences: [],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    { src: "/images/gallery/horizontal-1.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-4.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-3.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-1.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/vertical-2.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-2.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-4.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-3.jpg", alt: "image", orientation: "vertical" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
