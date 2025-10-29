import { useState, useRef } from "react";
import InfoSection from "./components/InfoSection";
import ProjectSection from "./components/navigationTab/ProjectSection";
import AboutSection from "./components/navigationTab/AboutSection";
import ContactSection, {
  GmailCard,
  LinkedInCard,
  GithubCard,
  EmailForm,
} from "./components/navigationTab/ContactSection";
import Footer from "./components/Footer";

function App() {
  const [tab, setTab] = useState("Projects");
  const Tabs = {
    Projects: <ProjectSection />,
    About: <AboutSection />,
    Contact: <ContactSection />,
  };

  const handleContactBtn = () => {
    const form = document.getElementById("contact");
    form.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="bg-primary">
        <InfoSection
          tab={tab}
          setTab={setTab}
          handleContactBtn={handleContactBtn}
        />
      </div>
      <main className="container mx-auto p-4">
        <div className="lg:hidden">{Tabs[tab]}</div>

        <div className="hidden lg:flex gap-5">
          <div className="space-y-5">
            <AboutSection />
            <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="bg-primary rounded-xl p-4 md:col-span-2 border border-lightGrey">
                <h2 className=" text-xl font-extrabold text-neon">
                  Let’s connect on social platforms
                </h2>
              </div>
              <div className="md:col-span-2">
                <GmailCard />
              </div>

              <div className="col-span-2">
                <LinkedInCard />
              </div>
              <div className="col-span-2">
                <GithubCard />
              </div>

              <div className="md:col-span-2" id="contact">
                <EmailForm />
              </div>
            </section>
          </div>
          <div className="lg:w-3/5">
            <h3 className="mb-5 text-xl text-neon font-bold bg-primary border border-lightGrey rounded-lg p-4 text-center">
              Featured Projects
            </h3>
            <ProjectSection />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
