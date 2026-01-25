// TODO, MIGRATE THIS INTO DATABASE

import { RiNextjsFill } from "react-icons/ri";
import {
  SiAntdesign,
  SiChakraui,
  SiCss3,
  SiDelphi,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiLess,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const techStackItems = [
  {
    category: "frontend",
    items: [
      {
        index: 0,
        name: "React",
        icon: SiReact,
        docsUrl: "https://react.dev/",
      },
      {
        index: 1,
        name: "Next.js",
        icon: RiNextjsFill,
        docsUrl: "https://nextjs.org/",
      },
      {
        index: 2,
        name: "JavaScript",
        icon: SiJavascript,
        docsUrl: "https://www.javascript.com/",
      },
      {
        index: 3,
        name: "TypeScript",
        icon: SiTypescript,
        docsUrl: "https://www.typescriptlang.org/",
      },
      {
        index: 4,
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        docsUrl: "https://tailwindcss.com/",
      },
      {
        index: 5,
        name: "Chakra",
        icon: SiChakraui,
        docsUrl: "https://chakra-ui.com/",
      },
      {
        index: 6,
        name: "Ant Design",
        icon: SiAntdesign,
        docsUrl: "https://ant.design/",
      },
      {
        index: 7,
        name: "HTML5",
        icon: SiHtml5,
        docsUrl: "https://www.w3schools.com/html/",
      },
      {
        index: 8,
        name: "CSS3",
        icon: SiCss3,
        docsUrl: "https://www.w3schools.com/css/",
      },
      {
        index: 9,
        name: "Less",
        icon: SiLess,
        docsUrl: "https://lesscss.org/",
      },
    ],
  },
  {
    category: "backend",
    items: [
      {
        index: 0,
        name: "Express.js",
        icon: SiExpress,
        docsUrl: "https://expressjs.com/",
      },
      {
        index: 1,
        name: "PostgreSQL",
        icon: SiPostgresql,
        docsUrl: "https://www.postgresql.org/",
      },
      {
        index: 2,
        name: "MySQL",
        icon: SiMysql,
        docsUrl: "https://www.mysql.com/",
      },
      {
        index: 3,
        name: "MongoDB",
        icon: SiMongodb,
        docsUrl: "https://www.mongodb.com/",
      },
      {
        index: 4,
        name: "Prisma",
        icon: SiPrisma,
        docsUrl: "https://www.prisma.io/",
      },
      {
        index: 5,
        name: "Pascal/Delphi",
        icon: SiDelphi,
        docsUrl: "https://www.embarcadero.com/products/delphi/features/delphi/",
      },
    ],
  },
  {
    category: "Collaboration",
    items: [
      {
        index: 0,
        name: "Git",
        icon: SiGit,
        docsUrl: "https://git-scm.com/",
      },
      {
        index: 1,
        name: "GitHub",
        icon: SiGithub,
        docsUrl: "https://github.com/",
      },
      {
        index: 2,
        name: "Jira",
        icon: SiJira,
        docsUrl: "https://www.atlassian.com/software/jira",
      },
      {
        index: 3,
        name: "Figma",
        icon: SiFigma,
        docsUrl: "https://www.figma.com/",
      },
    ],
  },
];
