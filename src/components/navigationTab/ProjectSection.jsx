import linkguard1 from "../../assets/images/linkguard/UI_home.png";
import linkguard2 from "../../assets/images/linkguard/UI_scan.png";
import linkguard3 from "../../assets/images/linkguard/UI_scan1.PNG";
import linkguard4 from "../../assets/images/linkguard/UI_scan2.PNG";
import linkguard5 from "../../assets/images/linkguard/UI_settings.PNG";
import linkguard from "../../assets/images/linkguard/Linkguard.png";
import linkguardCover from "../../assets/images/linkguard/linkguard_cover.PNG";
import shopco from "../../assets/images/cover.jpg";
import me from "../../assets/images/CJLogo.png";
import theBox from "../../assets/images/coverTheBox.PNG";
import { IoLogoGithub, FaTowerBroadcast, MdDownload } from "../ReactIcons";
import { ButtonCard } from "../Button";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function ProjectSection() {
  const posts = [
    {
      title: "LinkGuard: A Mobile Link Checker For Android Devices",
      date: "September 2024",
      postContext:
        "LinkGuard is an android mobile app that detects SMS messages with links, captures a snapshot of the link, and swiftly analyzes it for potential smishing threats and malicious activity, ensuring your protection",
      postImage: [
        linkguard,
        linkguard1,
        linkguard2,
        linkguard3,
        linkguard4,
        linkguard5,
      ],
      repoURL: "https://github.com/Siege-S/LinkChecker",
      hostURL: "",
      downloadURL:
        "https://github.com/Siege-S/LinkChecker/releases/download/LinkGuard-v17.7.00/LinkGuard.ver.17.7.apk",
      techUsed: ["Android Studio", "Sqlite", "Java"],
    },
    {
      title: "LinkGuard: Responsive Website",
      date: "November 2025",
      postContext:
        "LinkGuard is an android mobile app that detects SMS messages with links, captures a snapshot of the link, and swiftly analyzes it for potential smishing threats and malicious activity, ensuring your protection",
      postImage: [linkguardCover],
      repoURL: "https://github.com/Siege-S/project-linkguard",
      hostURL: "https://project-linkguard.vercel.app/",
      downloadURL: "",
      techUsed: ["React", "Tailwind", "Vite"],
    },
    {
      title: "Shopco: E-commerce Front-end Development Project",
      date: "September 2025",
      postContext:
        "Shopco E-commerce is a fully responsive, mobile-first website built with React.js and Vite, styled using Tailwind CSS.",
      postImage: [shopco],
      repoURL: "https://github.com/Siege-S/shopco-e-commerce",
      hostURL: "https://shopco-e-commerce-ikki.vercel.app/",
      techUsed: ["React", "Tailwind", "React Router", "Vite"],
    },
    {
      title: "The Box: Landing Page Front-end Development Project",
      date: "August 2025",
      postContext:
        "This project is a frontend recreation of a Figma landing page. I converted the design into a fully responsive webpage using HTML, CSS, JavaScript, and Tailwind CSS.",
      postImage: [theBox],
      repoURL: "https://github.com/Siege-S/TheBox-landing-page",
      hostURL: "https://siege-s.github.io/TheBox-landing-page/",
      techUsed: ["HTML", "CSS", "Tailwind"],
    },
  ];
  return (
    <section className="space-y-5">
      {posts.map((post, index) => (
        <ProjectCard
          key={index}
          title={post.title}
          date={post.date}
          postContext={post.postContext}
          postImage={post.postImage}
          postRepo={post.repoURL}
          postHost={post.hostURL}
          postDownload={post.downloadURL}
          postTech={post.techUsed}
        />
      ))}
    </section>
  );
}

const ProjectCard = ({
  title,
  date,
  postContext,
  postImage,
  postRepo,
  postHost,
  postDownload,
  postTech,
}) => {
  return (
    <div className=" bg-primary pt-4 pb-1 overflow-hidden border border-lightGrey rounded-xl">
      <div className="flex  px-4">
        <div className="w-10 border-1 border-white bg-white/50 rounded-full h-fit">
          <img src={me} alt="me" />
        </div>
        <div className="flex flex-col pl-2 text-white">
          <span className="text-sm font-semibold text-neon">{title}</span>
          <span className="text-xs pt-1">{date}</span>
        </div>
      </div>
      <div className=" text-white font-light p-4">
        {postContext}
        <ul className="flex gap-4 mt-2 flex-wrap">
          {postTech &&
            postTech.map((post, index) => (
              <li
                key={index}
                className="text-sm text-center py-1 px-3 bg-white/20 rounded-full text-neon"
              >
                {post}
              </li>
            ))}
        </ul>
      </div>

      <div className="flex justify-center mb-2 overflow-hidden bg-dark ">
        {postImage.length > 1 ? (
          <ImageSwiper images={postImage} />
        ) : (
          <img className="object-cover max-h-137" src={postImage} />
        )}
      </div>
      <hr className="border-.5 border-lightGrey my-1" />
      <div className="flex justify-evenly text-lightGrey gap-1">
        {postDownload && (
          <ButtonCard onClick={() => window.open(postDownload, "_blank")}>
            <MdDownload />
            <span>Download</span>
          </ButtonCard>
        )}

        {postHost && (
          <ButtonCard onClick={() => window.open(postHost, "_blank")}>
            <FaTowerBroadcast />
            <span>Live</span>
          </ButtonCard>
        )}
        {postRepo && (
          <ButtonCard onClick={() => window.open(postRepo, "_blank")}>
            <IoLogoGithub />
            <span>Repository</span>
          </ButtonCard>
        )}
      </div>
    </div>
  );
};

function ImageSwiper({ images }) {
  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {images.map((image, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center h-full">
              <img
                className="object-cover h-full w-fit max-h-80 md:max-h-100  lg:max-h-137"
                src={image}
                alt="post image"
                draggable={false}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
