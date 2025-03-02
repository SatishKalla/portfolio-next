import { FcGlobe, FcEngineering, FcDatabase, FcSettings } from "react-icons/fc";
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiVuedotjs,
  SiBootstrap,
  SiMaterialdesign,
  SiAntdesign,
  SiShadcnui,
  SiRedbull,
  SiApachekafka,
  SiPhp,
  SiLaravel,
  SiYii,
  SiMysql,
  SiAmazonwebservices,
} from "react-icons/si";

const categoryWiseSkills = [
  {
    category: "Frontend",
    icon: <FcGlobe className="w-6 h-6" />,
    skills: [
      {
        name: "Javascript",
        icon: <SiJavascript className="w-4 h-4 text-yellow-500" />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript className="w-4 h-4 text-blue-500" />,
      },
      { name: "React", icon: <SiReact className="w-4 h-4 text-blue-500" /> },
      { name: "Angular", icon: <SiAngular className="w-4 h-4 text-red-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-black" /> },
      {
        name: "Vue.js",
        icon: <SiVuedotjs className="w-4 h-4 text-green-500" />,
      },
      { name: "Html5", icon: <SiHtml5 className="w-4 h-4 text-orange-500" /> },
      {
        name: "Css3",
        icon: <SiCss3 className="w-4 h-4 text-blue-400" />,
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap className="w-4 h-4 text-purple-500" />,
      },
      {
        name: "Material Ui",
        icon: <SiMaterialdesign className="w-4 h-4 text-blue-500" />,
      },
      {
        name: "Ant Design",
        icon: <SiAntdesign className="w-4 h-4 text-blue-500" />,
      },
      {
        name: "Shadcn/Ui",
        icon: <SiShadcnui className="w-4 h-4 text-black" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-4 h-4 text-blue-300" />,
      },
    ],
  },
  {
    category: "Backend",
    icon: <FcEngineering className="w-6 h-6" />,
    skills: [
      {
        name: "Node.js",
        icon: <SiNodedotjs className="w-4 h-4 text-green-600" />,
      },
      {
        name: "Express",
        icon: <SiExpress className="w-4 h-4 text-gray-700" />,
      },
      { name: "NestJS", icon: <SiNestjs className="w-4 h-4 text-red-500" /> },
      {
        name: "GraphQL",
        icon: <SiGraphql className="w-4 h-4 text-pink-500" />,
      },
      {
        name: "KafkaJS",
        icon: <SiApachekafka className="w-4 h-4 text-black" />,
      },
      {
        name: "BullJS",
        icon: <SiRedbull className="w-4 h-4 text-pink-500" />,
      },
      {
        name: "PHP",
        icon: <SiPhp className="w-4 h-4 text-blue-800" />,
      },
      {
        name: "Laravel",
        icon: <SiLaravel className="w-4 h-4 text-red-300" />,
      },
      {
        name: "Yii2",
        icon: <SiYii className="w-4 h-4 text-blue-400" />,
      },
    ],
  },
  {
    category: "Database",
    icon: <FcDatabase className="w-6 h-6" />,
    skills: [
      {
        name: "MySQL",
        icon: <SiMysql className="w-4 h-4 text-blue-500" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-4 h-4 text-blue-500" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-4 h-4 text-green-500" />,
      },
      { name: "Redis", icon: <SiRedis className="w-4 h-4 text-red-500" /> },
    ],
  },
  {
    category: "DevOps",
    icon: <FcSettings className="w-6 h-6" />,
    skills: [
      { name: "Docker", icon: <SiDocker className="w-4 h-4 text-blue-500" /> },
      {
        name: "AWS(Few Services)",
        icon: <SiAmazonwebservices className="w-4 h-4 text-orange-500" />,
      },
    ],
  },
];

export default categoryWiseSkills;
