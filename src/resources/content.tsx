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
  languages: ["Indonesia", "English", "Sunda", "Jawa"],
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
    link: "https://www.threads.com/",
    essential: false,
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/62895410071368?text=Halo%20guys.",
    essential: true,
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
  description: `Portfolio website showcasing my project as a ${person.role}`,
  headline: <>Building projects that benefit the community.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Zhaq Project</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project🚀 
        </Text>
      </Row>
    ),
    href: "/work/poster-dinding",
  },
  subline: (
    <>
      Hello, I am Zhaq. a Muballigh at one of Majelis Taklim in{" "}
      <Text as="span" size="xl" weight="strong">
        Depok City
      </Text>
      , with a passion for making a positive impact,
        being influential without being influenced.
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
    link: "https://wa.me/62895410071368?text=Halo%20guys.",
  },

  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Mufid Zhaqie is a Muballigh at one of Majelis Taklim in Depok City with a passion for making a positive impact,
        being influential without being influenced, and providing simple and elegant design solutions.
        His work includes digital interfaces, interactive experiences, and the convergence of design and technology.
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
        description: <>Studied xxxxxxxx</>,
      },
      {
        name: "Build the Project",
        description: <>Studied online and personal branding.</>,
      },
    ],
  },

  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Design Graphic",
        description: <>Able to design in Canva and CorelDRAW.
          Editing photos in Adobe Photoshop or Adobe Lightroom on PC. Using PixelLab, Picsay and InShot on Mobile.</>,
        tags: [
          {
            name: "CorelDRAW",
          },
          {
            name: "Adobe Photoshop",
          },
          {
            name: "Lightroom Mobile",
          },
          {
            name: "InShot",
          },
          {
            name: "PixelLab",
          },
          {
            name: "Picsay Pro",
          },
        ],
        images: [],
//          {
//            src: "/images/projects/project-01/cover-02.jpg",
//            alt: "Project image",
//            width: 16,
//            height: 9,
//          },
//        {
//            src: "/images/projects/project-01/cover-03.jpg",
//            alt: "Project image",
//            width: 16,
//            height: 9,
//          },
//        ],
      },
      {
        title: "Photographer",
        description: <>Photography Enthusiast.</>,
        images: [],
      },
      {
        title: "Copywriter",
        description: <>Writing on social media platforms.</>,
        images: [],
      },
      {
        title: "Administration Secretary",
        description: <>Skilled in managing financial records, organizing filing systems,and ensuring accurate
          and transparent reporting of transactions.</>,
        images: [],
      },
    ],
  },

  soft: {
    display: true,
    title: "Soft Skills",
    skills: [
      {
        title: "Communication",
        description: <>Able to communicate effectively with others.</>,
      },
      {
        title: "Critical Thinking",
        description: <>Able to analyze and evaluate information effectively.</>,
      },
      {
        title: "Public Relations",
        description: <>Able to build and maintain good relationships with the community.</>,
      },
      {
        title: "Public Speaking",
        description: <>Able to communicate well with the public.</>,
      },
      {
        title: "Organization",
        description: <>Able to organize and manage tasks efficiently.</>,
      },
      {
        title: "Time Management",
        description: <>Able to manage time and tasks effectively.</>,
      },
    ],
  },

  certificates: {
    display: true,
    title: "Certificates",
    experiences: [
      {
        company: "Accounting and Management Training",
        timeframe: "Jan 2022 - Present",
        role: "Pondok Pesantren Wali Barokah Kota Kediri",
        achievements: [],
        images: [],
      },
      {
        company: "Microsoft Excel Essentials",
        timeframe: "Jul 2025 - Present",
        role: "Alison | ID Kredensial: 1940-50447968",
        achievements: [],
        images: [],
      },
      {
        company: "Study Case Bootcamp Data Analyst with Excel",
        timeframe: "Aug 2025 - Present",
        role: "DQLab | ID Kredensial: #DQLABMB7EXCUWSTFE",
        achievements: [],
        images: [
          {
          src: "/images/gallery/certificate-8.jpg",
          alt: "Certificate 10",
          width: 16,
          height: 12,
          },
        ],
      },
      {
        company: "Fundamental Project Management",
        timeframe: "Aug 2025 - Present",
        role: "Digital Talent Scholarship 2025, KOMDIGI | ID Kredensial: 19510935840-686",
        achievements: [],
        images: [
          {
          src: "/images/gallery/certificate-10.jpg",
          alt: "Certificate 10",
          width: 16,
          height: 12,
          },
        ],
      },
      {
        company: "Intro to Data Analytics",
        timeframe: "Aug 2025 - Present",
        role: "RevoU | ID Kredensial: DAMC-28072025-01-1-00107",
        achievements: [],
        images: [
          {
          src: "/images/gallery/certificate-1.jpg",
          alt: "Certificate 1",
          width: 16,
          height: 12,
          },
        ],
      },
      {
        company: "Foundations:  Data, Data, Everywhere",
        timeframe: "Sep 2025 - Present",
        role: "Google, Coursera | ID Kredensial: SLGLDCP97UIO",
        achievements: [],
        images: [
          {
          src: "/images/gallery/certificate-3.jpg",
          alt: "Certificate 3",
          width: 16,
          height: 12,
          },
        ],
      },
      {
        company: "Free Class: Data Science",
        timeframe: "Sep 2025 - Present",
        role: "Dibimbing",
        achievements: [],
        images: [
          {
          src: "/images/gallery/certificate-6.jpg",
          alt: "Certificate 6",
          width: 16,
          height: 12,
          },
        ],
      },
            {
        company: "Short Class: Data Analysis Fundamental",
        timeframe: "Aug 2025 - Present",
        role: "MySkill | ID Kredensial: 270794/DTA/LM/08/2025",
        achievements: [],
        images: [
          {
          src: "/images/gallery/certificate-11.jpg",
          alt: "Certificate 11",
          width: 16,
          height: 12,
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
};

const work: Work = {
  path: "/work",
  label: "Project",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Certificates",
  title: `Certificates – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    { src: "/images/gallery/certificate-1.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/certificate-2.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/certificate-3.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/certificate-4.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/certificate-5.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/certificate-6.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/certificate-7.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/certificate-8.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/certificate-9.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/certificate-10.jpg", alt: "image", orientation: "vertical" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
