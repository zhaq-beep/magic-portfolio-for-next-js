import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text, Badge, SmartLink } from "@once-ui-system/core";

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
  title: <>Subscribe to {person.name}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and projects.</>,
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
  title: `${person.name} Portfolio - Muballigh`,
  description: `Mufid Zhaqie is a ${person.role} at one of Majelis Taklim in Depok City who is passionate about making a positive impact while remaining grounded. He provides simple and elegant design solutions, with work spanning digital interfaces, interactive experiences, and the intersection of design and technology.`,
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
    href: "/project/worksheet/",
  },
  subline: (
    <>
      Hi, I am Zhaq. a Muballigh at one of Majelis Taklim in <Text as="span" size="xl" weight="strong">Depok City</Text>,
      passionate about creating intuitive user experiences. I enjoy working on <br /> projects that can be
      beneficial to others.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Getting to know ${person.firstName} ${person.lastName}, an Administrator at J&T Express and an Information Systems student at Universitas Terbuka who is also building skills in data analysis and graphic design.`,

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
        Mufid Zhaqie is an Administrator at J&T Express, DC Bojong Kembar, Sukabumi, 
        where he manages employee data and prepares payment reports. 
        He is also an Information Systems student at Universitas Terbuka, 
        developing his skills in data analysis and graphic design. 
        Previously, he served as a Muballigh at a Majelis Taklim in Depok City, 
        contributing to Islamic education and community development.
      </>
    ),
  },

  work: {
    display: true,
    title: "Experiences 🚀",
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
            Creating a design project as a form of learning and knowledge.
          </>,
          <>
            Building a project that benefits the people.
          </>,
          <>
            Building a interactive quiz website page for Generus.
          </>,
        ],
        images: [],
      },
      {
        company: "J&T Express - DC Bojong Kembar, Sukabumi",
        timeframe: "Nov 2026 - Present",
        role: "Administrator",
        achievements: [
          <>
            Participating in the daily activities of the implementing unit.
          </>,
          <>
            Managing and updating incoming and outgoing employee data to ensure accurate and organized personnel administration records.
          </>,
          <>
            Processing employee ID number requests and updates according to administrative needs.
          </>,
          <>
            Compiling, checking, and preparing payment reports from the system using Microsoft Excel.
          </>,
          <>
            Serving customers in the shipping transaction process and helping meet their basic shipping needs.
          </>,
          <>
            Supporting smooth daily operations through data management and careful, systematic administrative work.
          </>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: true,
    title: "Studies 🎓️",
    institutions: [
      {
        name: "Universitas Terbuka",
        description: <>Currently studying Information Systems.</>,
      },
      {
        name: "Build the Project",
        description: <>Studied online and personal branding.</>,
      },
    ],
  },

  technical: {
    display: true,
    title: "Technical Skills 🧩",
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
    title: "Soft Skills 🎯",
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
    title: "Certificates 📑",
    experiences: [
      {
        company: "Accounting and Management Training", // 000
        timeframe: "Jan 2022 - Present",
        role: (
          <Row gap="8" vertical="center">
            <Text variant="body-default-s">
              Pondok Pesantren Wali Barokah Kota Kediri
            </Text>
          </Row>
        ),
        achievements: [],
        images: [],
      },
      {
        company: "Microsoft Excel Essentials", // 012
        timeframe: "Jul 2025 - Present",
        role: (
          <Row gap="8" vertical="center">
            <Text variant="body-default-s">
              Alison | ID Kredensial: 
              <SmartLink href="https://alison.com/certification/check/ba47f91070" selected>
                50447968
              </SmartLink>
            </Text>
            <Badge
              href="/images/certificate/certificate-012.jpg"
              id="badge-3"
              title="View"
              icon="document"
              effect={true}
              arrow={true}
              textVariant="label-default-s"
            />
          </Row>
        ),
        achievements: [],
        images: [],
      },
      {
        company: "Study Case Bootcamp Data Analyst with Excel", // 008
        timeframe: "Aug 2025 - Present",
        role: (
          <Row gap="8" vertical="center">
            <Text variant="body-default-s">
              DQLab | ID Kredensial:
              <SmartLink href="https://academy.dqlab.id/certificate/pdf/DQLABMB7EXCUWSTFE" selected>
                #DQLABMB7EXCUWSTFE
              </SmartLink>
            </Text>
            <Badge
              href="/images/certificate/certificate-008.jpg"
              id="badge-3"
              title="View"
              icon="document"
              effect={true}
              arrow={true}
              textVariant="label-default-s"
            />
          </Row>
        ),
        achievements: [],
        images: [],
//          {
//          src: "/images/gallery/certificate-8.jpg",
//          alt: "Certificate 10",
//          width: 16,
//          height: 12,
//          },
//        ],
      },
      {
        company: "Ask Questions to Make Data-Driven Decisions", // 002
        timeframe: "Sep 2025 - Present",
        role: (
          <Row gap="8" vertical="center">
            <Text variant="body-default-s">
              Google, Coursera | ID Kredensial: 
              <SmartLink href="https://www.coursera.org/account/accomplishments/verify/OYEETYUO0CE6" selected>
                OYEETYUO0CE6 
              </SmartLink>
            </Text>
            <Badge
              href="/images/certificate/certificate-002.jpg"
              id="badge-3"
              title="View"
              icon="document"
              effect={true}
              arrow={true}
              textVariant="label-default-s"
            />
          </Row>
        ),
        achievements: [],
        images: [],
//          {
//          src: "/images/gallery/certificate-2.jpg",
//          alt: "Certificate 10",
//          width: 16,
//          height: 12,
//          },
//        ],
      },
      {
        company: "Process Data from Dirty to Clean", // 009
        timeframe: "Oct 2025 - Present",
        role: (
          <Row gap="8" vertical="center">
            <Text variant="body-default-s">
              Google, Coursera | ID Kredensial: 
              <SmartLink href="https://www.coursera.org/account/accomplishments/verify/C0IWDGT054W1" selected>
                C0IWDGT054W1 
              </SmartLink>
            </Text>
            <Badge
              href="/images/certificate/certificate-009.jpg"
              id="badge-3"
              title="View"
              icon="document"
              effect={true}
              arrow={true}
              textVariant="label-default-s"
            />
          </Row>
        ),
        achievements: [],
        images: [],
//          {
//          src: "/images/gallery/certificate-2.jpg",
//          alt: "Certificate 10",
//          width: 16,
//          height: 12,
//          },
//        ],
      },
      {
        company: "Fundamental Project Management", // 010
        timeframe: "Aug 2025 - Present",
        role: (
          <Row gap="8" vertical="center">
            <Text variant="body-default-s">
              Digital Talent Scholarship | ID Kredensial: 
              <SmartLink href="https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=19510935840-686" selected>
                19510935840-686
              </SmartLink>  
            </Text>
            <Badge
              href="/images/certificate/certificate-010.jpg"
              id="badge-3"
              title="View"
              icon="document"
              effect={true}
              arrow={true}
              textVariant="label-default-s"
            />
          </Row>
        ),
        achievements: [],
        images: [],
//          {
//          src: "/images/gallery/certificate-10.jpg",
//          alt: "Certificate 10",
//          width: 16,
//          height: 12,
//          },
//        ],
      },
      {
        company: "Intro to Data Analytics", // 001
        timeframe: "Aug 2025 - Present",
        role: (
          <Row gap="8" vertical="center">
            <Text variant="body-default-s">
              RevoU | ID Kredensial: 
               <SmartLink href="https://certificates.revou.tech/" selected>
                 DAMC-28072025-01-1-00107
               </SmartLink>
            </Text>
            <Badge
              href="/images/certificate/certificate-001.jpg"
              id="badge-3"
              title="View"
              icon="document"
              effect={true}
              arrow={true}
              textVariant="label-default-s"
            />
          </Row>
        ),
        achievements: [],
        images: [],
//          {
//          src: "/images/gallery/certificate-1.jpg",
//          alt: "Certificate 1",
//          width: 16,
//          height: 12,
//          },
//        ],
      },
      {
        company: "Prepare Data for Exploration", // 014
        timeframe: "Sep 2025 - Present",
        role: (
          <Row gap="8" vertical="center">
            <Text variant="body-default-s">
              Google, Coursera | ID Kredensial: 
               <SmartLink href="https://www.coursera.org/account/accomplishments/verify/897PDFIQTLRU" selected>
                 897PDFIQTLRU
               </SmartLink>
            </Text>
            <Badge
              href="/images/certificate/certificate-014.jpg"
              id="badge-3"
              title="View"
              icon="document"
              effect={true}
              arrow={true}
              textVariant="label-default-s"
            />
          </Row>
        ),
        achievements: [],
        images: [],
//          {
//          src: "/images/gallery/certificate-14.jpg",
//          alt: "Certificate 1",
//          width: 16,
//          height: 12,
//          },
//        ],
      },
      {
        company: "Analyze Data to Answer Questions", // 005
        timeframe: "Oct 2025 - Present",
        role: (
          <Row gap="8" vertical="center">
            <Text variant="body-default-s">
              Google, Coursera | ID Kredensial: 
               <SmartLink href="https://www.coursera.org/account/accomplishments/records/9J2XVH4H1XDJ" selected>
                 9J2XVH4H1XDJ
               </SmartLink>
            </Text>
            <Badge
              href="/images/certificate/certificate-005.jpg"
             id="badge-3"
              title="View"
              icon="document"
              effect={true}
              arrow={true}
              textVariant="label-default-s"
            />
          </Row>
        ),
        achievements: [],
        images: [],
//          {
//          src: "/images/gallery/certificate-1.jpg",
//          alt: "Certificate 1",
//          width: 16,
//          height: 12,
//          },
//        ],
      },
      {
        company: "Share Data Through the Art of Visualization", // 013
        timeframe: "Oct 2025 - Present",
        role: (
          <Row gap="8" vertical="center">
            <Text variant="body-default-s">
              Google, Coursera | ID Kredensial: 
               <SmartLink href="https://www.coursera.org/account/accomplishments/records/ZLGC969SUWAU" selected>
                 ZLGC969SUWAU
               </SmartLink>
            </Text>
            <Badge
              href="/images/certificate/certificate-013.jpg"
              id="badge-3"
              title="View"
              icon="document"
              effect={true}
              arrow={true}
              textVariant="label-default-s"
            />
          </Row>
        ),
        achievements: [],
        images: [],
//          {
//          src: "/images/gallery/certificate-1.jpg",
//          alt: "Certificate 1",
//          width: 16,
//          height: 12,
//          },
//        ],
      },
      {
        company: "Foundations: Data, Data, Everywhere", // 003
        timeframe: "Sep 2025 - Present",
        role: (
          <Row gap="8" vertical="center">
            <Text variant="body-default-s">
              Google, Coursera | ID Kredensial:
              <SmartLink href="https://www.coursera.org/account/accomplishments/records/SLGLDCP97UIO" selected>
                SLGLDCP97UIO
              </SmartLink>
            </Text>
            <Badge
              href="/images/certificate/certificate-003.jpg"
              id="badge-3"
              title="View"
              icon="document"
              effect={true}
              arrow={true}
              textVariant="label-default-s"
            />
          </Row>
        ),
        achievements: [],
        images: [],
//          {
//          src: "/images/gallery/certificate-3.jpg",
//          alt: "Certificate 3",
//          width: 16,
//          height: 12,
//          },
//        ],
      },
      {
        company: "Free Class: Data Science", // 006
        timeframe: "Sep 2025 - Present",
        role: (
          <Row gap="8" vertical="center">
            <Text variant="body-default-s">
              Dibimbing
            </Text>
            <Badge
              href="/images/certificate/certificate-006.jpg"
              id="badge-3"
              title="View"
              icon="document"
              effect={true}
              arrow={true}
              textVariant="label-default-s"
            />
          </Row>
        ),
        achievements: [],
        images: [],
//          {
//          src: "/images/gallery/certificate-6.jpg",
//          alt: "Certificate 6",
//          width: 16,
//          height: 12,
//          },
//        ],
      },
      {
        company: "Short Class: Data Analysis Fundamental", // 011
        timeframe: "Aug 2025 - Present",
        role: (
          <Row gap="8" vertical="center">
            <Text variant="body-default-s">
              MySkill | ID Kredensial:
              <SmartLink href="https://myskill.id/" selected> 
                270794/DTA/LM/08/2025
              </SmartLink>
            </Text>
            <Badge
              href="/images/certificate/certificate-011.jpg"
              id="badge-3"
              title="View"
              icon="document"
              effect={true}
              arrow={true}
              textVariant="label-default-s"
            />
          </Row>
        ),
        achievements: [],
        images: [],
//          {
//          src: "/images/gallery/certificate-11.jpg",
//          alt: "Certificate 11",
//          width: 16,
//          height: 12,
//          },
//        ],
      },
      {
        company: "Aplikasi Design Grafis bagi Guru dan Tenaga Kependidikan", // 007
        timeframe: "Jul 2025 - Present",
        role: (
          <Row gap="8" vertical="center">
            <Text variant="body-default-s">
              MySkill | ID Kredensial:
              <SmartLink href="https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=19410570850-145" selected> 
                19410570850-145
              </SmartLink>
            </Text>
            <Badge
              href="/images/certificate/certificate-007.jpg"
              id="badge-3"
              title="View"
              icon="document"
              effect={true}
              arrow={true}
              textVariant="label-default-s"
            />
          </Row>
        ),
        achievements: [],
        images: [],
//          {
//          src: "/images/gallery/certificate-004.jpg",
//          alt: "Certificate 11",
//          width: 16,
//          height: 12,
//          },
//        ],
      },
      {
        company: "Short Class: Designing Using Canva", // 004
        timeframe: "Aug 2025 - Present",
        role: (
          <Row gap="8" vertical="center">
            <Text variant="body-default-s">
              MySkill | ID Kredensial:
              <SmartLink href="https://myskill.id/" selected> 
                278114/GFD/LM/08/2025
              </SmartLink>
            </Text>
            <Badge
              href="/images/certificate/certificate-004.jpg"
              id="badge-3"
              title="View"
              icon="document"
              effect={true}
              arrow={true}
              textVariant="label-default-s"
            />
          </Row>
        ),
        achievements: [],
        images: [],
//          {
//          src: "/images/gallery/certificate-004.jpg",
//          alt: "Certificate 11",
//          width: 16,
//          height: 12,
//          },
//        ],
      },
      {
        company: "Dasar-Dasar Implementasi Kecerdasan Artifisial", // 004
        timeframe: "Aug 2025 - Present",
        role: (
          <Row gap="8" vertical="center">
            <Text variant="body-default-s">
              Digital Talent Scholarship | ID Kredensial:
              <SmartLink href="https://myskill.id/" selected> 
                2299748850-12319
              </SmartLink>
            </Text>
          </Row>
        ),
        achievements: [],
        images: [],
//          {
//          src: "/images/gallery/certificate-004.jpg",
//          alt: "Certificate 11",
//          width: 16,
//          height: 12,
//          },
//        ],
      },
    ],
  },
  
    projects: {
    display: true,
    title: "Projects ✨",
    skills: [
      {
        title: "Views of some of my projects",
        description: (
          <Row gap="12" vertical="center">
            <Badge
              href="/project"
              id="badge-2"
              title="Catch me 🫵"
              icon="rocket"
              textVariant="label-default-s"
              onBackground="brand-medium"
              background="brand-medium"
            />
          </Row>       
        ),
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
  path: "/project",
  label: "Project",
  title: `Project – ${person.name}`,
  description: `Display of several projects by ${person.name}, a ${person.role} at one of Majelis Taklim in Depok City who is passionate about making a positive impact while remaining grounded. He provides simple and elegant design solutions, with work spanning digital interfaces, interactive experiences, and the intersection of design and technology.`,
};

const gallery: Gallery = {
  path: "/certificates",
  label: "Certificates",
  title: `Certificates – ${person.name}`,
  description: `Courses and trainings completed by ${person.name}.`,
  certificates: [
    {
      src: "/images/certificate/certificate-013.jpg",
      title: "Share Data Through the Art of Visualization",
      issuer: "Google, via Coursera",
      category: "Data & Excel",
      date: "2025-10-27",
      verifyUrl: "https://coursera.org/verify/ZLGC969SUWAU",
    },
    {
      src: "/images/certificate/certificate-005.jpg",
      title: "Analyze Data to Answer Questions",
      issuer: "Google, via Coursera",
      category: "Data & Excel",
      date: "2025-10-14",
      verifyUrl: "https://coursera.org/verify/9J2XVH4H1XDJ",
    },
    {
      src: "/images/certificate/certificate-009.jpg",
      title: "Process Data from Dirty to Clean",
      issuer: "Google, via Coursera",
      category: "Data & Excel",
      date: "2025-10-06",
      verifyUrl: "https://coursera.org/verify/C0IWDGT054W1",
    },
    {
      src: "/images/certificate/certificate-014.jpg",
      title: "Prepare Data for Exploration",
      issuer: "Google, via Coursera",
      category: "Data & Excel",
      date: "2025-09-27",
      verifyUrl: "https://coursera.org/verify/897PDFIQTLRU",
    },
    {
      src: "/images/certificate/certificate-002.jpg",
      title: "Ask Questions to Make Data-Driven Decisions",
      issuer: "Google, via Coursera",
      category: "Data & Excel",
      date: "2025-09-21",
      verifyUrl: "https://coursera.org/verify/OYEETYUO0CE6",
    },
    {
      src: "/images/certificate/certificate-003.jpg",
      title: "Foundations: Data, Data, Everywhere",
      issuer: "Google, via Coursera",
      category: "Data & Excel",
      date: "2025-09-18",
      verifyUrl: "https://coursera.org/verify/SLGLDCP97UIO",
    },
    {
      src: "/images/certificate/certificate-010.jpg",
      title: "Fundamental Project Management",
      issuer: "Komdigi Digitalent, Fresh Graduate Academy",
      category: "Project management",
      date: "2025-08-20",
      detail: "10 hours of training, 14–20 Aug 2025",
      verifyUrl: "https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=19510935840-686",
    },
    {
      src: "/images/certificate/certificate-004.jpg",
      title: "Designing Using Canva",
      issuer: "MySkill",
      category: "Design",
      date: "2025-08-18",
      detail: "Graphic Design short class",
    },
    {
      src: "/images/certificate/certificate-008.jpg",
      title: "Study Case Bootcamp Data Analyst with Excel",
      issuer: "DQLab",
      category: "Data & Excel",
      date: "2025-08-05",
      verifyUrl: "https://academy.dqlab.id/certificate/pdf/DQLABMB7EXCUWSTFE",
    },
    {
      src: "/images/certificate/certificate-011.jpg",
      title: "Data Analysis Fundamental",
      issuer: "MySkill",
      category: "Data & Excel",
      date: "2025-08-04",
      detail: "Data Science and Analysis short class",
    },
    {
      src: "/images/certificate/certificate-001.jpg",
      title: "Intro to Data Analytics",
      issuer: "RevoU",
      category: "Data & Excel",
      date: "2025-08-01",
      detail: "1-week mini course",
    },
    {
      src: "/images/certificate/certificate-012.jpg",
      title: "Microsoft Excel Essentials",
      issuer: "Alison",
      category: "Data & Excel",
      date: "2025-07-23",
      detail: "Final assessment score 90%",
    },
    {
      src: "/images/certificate/certificate-007.jpg",
      title: "Aplikasi Desain Grafis bagi Guru dan Tenaga Kependidikan",
      issuer: "Komdigi Digitalent, Thematic Academy",
      category: "Design",
      date: "2025-06-25",
      detail: "30 hours of training, 20–25 Jun 2025",
      verifyUrl: "https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=19410570850-145",
    },
    {
      src: "/images/certificate/certificate-006.jpg",
      title: "Future-Proof Career: Menjadi Data Science",
      issuer: "dibimbing.id",
      category: "Data & Excel",
      detail: "Free class, certificate of participation",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
