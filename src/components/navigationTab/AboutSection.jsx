import {
  IoLogoJavascript,
  IoLogoFigma,
  RiTailwindCssFill,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  SiAndroidstudio,
  GrMysql,
  IoLogoGithub,
  VscVscode,
  SiPostman,
  SiCanva,
  SiPhp,
  SiVite,
  ImNpm,
  SiSqlite,
  FaJava,
} from "../ReactIcons";

const AboutSection = () => {
  const techIcons = [
    {
      name: "Javascript",
      icon: <IoLogoJavascript />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Vite",
      icon: <SiVite />,
    },
    {
      name: "Tailwind",
      icon: <RiTailwindCssFill />,
    },
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
    },
    {
      name: "Android Studio",
      icon: <SiAndroidstudio />,
    },
    { name: "Java", icon: <FaJava /> },
    {
      name: "MySQL",
      icon: <GrMysql />,
    },
    {
      name: "PHP",
      icon: <SiPhp />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "Github",
      icon: <IoLogoGithub />,
    },
    {
      name: "Figma",
      icon: <IoLogoFigma />,
    },
    {
      name: "VS Code",
      icon: <VscVscode />,
    },
    {
      name: "Postman",
      icon: <SiPostman />,
    },
    {
      name: "Canva",
      icon: <SiCanva />,
    },
    {
      name: "NPM",
      icon: <ImNpm />,
    },
    { name: "SQLite", icon: <SiSqlite /> },
  ];
  return (
    <>
      <div className="space-y-5">
        <div className="bg-primary rounded-xl text-white px-4 py-4 border border-lightGrey">
          <h3 className="mb-2 text-xl text-neon font-bold">About Me</h3>
          <p className="font-light">
            Hello! I’m Christian Joshua Sanchez from Pampanga, Philippines. I’m
            passionate about building functional, user-friendly, and responsive
            websites using modern web technologies.
          </p>
        </div>

        <div className="bg-primary rounded-xl text-white px-4 py-4 border border-lightGrey">
          <h3 className="mb-2 text-xl text-neon font-bold">
            The technologies I use to build projects
          </h3>

          <ul className="flex flex-wrap gap-4 justify-evenly">
            {techIcons.map((techIcon, index) => {
              return (
                <li
                  key={index}
                  className="w-fit h-fit flex flex-col justify-center items-center hover:scale-110 transition-all active:scale-95"
                >
                  <div className="bg-dark rounded-lg p-4 mb-1 text-5xl text-neon">
                    {techIcon.icon}
                  </div>

                  <span className="text-white text-sm">{techIcon.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
