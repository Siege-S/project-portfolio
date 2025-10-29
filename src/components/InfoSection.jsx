import me from "../assets/images/me.JPG";
import { ButtonPrimary } from "./Button";
import { MdEmail, IoMdDownload } from "../components/ReactIcons";

const InfoSection = ({ tab, setTab, handleContactBtn }) => {
  const handleContactMeBtn = () => {
    handleContactBtn();
    setTab("Contact");
  };
  return (
    <section className="lg:border-b lg:border-lightGrey">
      <div className="bg-primary w-full transition-all h-10 "></div>
      <div className="container mx-auto relative px-4 xl:px-0 flex flex-col items-center md:flex-row md:gap-4  lg:pb-10">
        <div className="w-45 shrink-0 rounded-full overflow-hidden border-5 border-primary transition-all">
          <img className="object-cover" src={me} alt="me" />
        </div>

        <div className="pt-10 w-full flex flex-col justify-center items-center transition-all md:pt-5 ">
          <div className="w-full lg:flex">
            <div className="flex flex-col md:w-full">
              <h2 className="text-green-400 text-center text-3xl font-black md:text-start md:text-3xl">
                Hi, I'm Christian Joshua
              </h2>
              <span className="w-full text-center text-xs text-white md:text-start md:text-sm">
                <a
                  href="https://www.linkedin.com/in/christian-joshua-sanchez-211957322"
                  target="_blank"
                >
                  @chrtnsnchz
                </a>
              </span>

              <p className="font-light text text-white py-4 md:w-full">
                I turn creative ideas and designs into responsive, user-friendly
                web products.
              </p>
            </div>
            <div className="w-full flex gap-4 pt-5 md:pt-0 lg:pl-0 lg:justify-end lg:items-start lg:w-3/5">
              <ButtonPrimary onClick={handleContactMeBtn} className={""}>
                <MdEmail className="text-xl mr-2" />
                Contact Me
              </ButtonPrimary>
              <ButtonPrimary
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1u2a6MWwLanuOP2gFxeJGcw-dgUWH4cUa/view?usp=drive_link",
                    "_blank"
                  )
                }
              >
                <IoMdDownload className="text-xl mr-2" />
                Download CV
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-.5 border-lightGrey w-full mt-5 lg:hidden" />
      <nav className="w-full px-4 lg:px-0 lg:hidden">
        <ul className="text-white flex justify-start">
          <li
            className={`py-4 px-3 cursor-pointer ${
              tab === "Projects"
                ? "text-green-400 shadow [text-shadow:_0_0_20px_#3b82f6]"
                : ""
            }`}
            onClick={() => setTab("Projects")}
          >
            Projects
          </li>
          <li
            className={`py-4 px-3 cursor-pointer ${
              tab === "About"
                ? "text-green-400 shadow [text-shadow:_0_0_20px_#3b82f6]"
                : ""
            }`}
            onClick={() => setTab("About")}
          >
            About
          </li>
          <li
            className={`py-4 px-3 cursor-pointer ${
              tab === "Contact"
                ? "text-green-400 shadow [text-shadow:_0_0_20px_#3b82f6]"
                : ""
            }`}
            onClick={() => setTab("Contact")}
          >
            Contact
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default InfoSection;
