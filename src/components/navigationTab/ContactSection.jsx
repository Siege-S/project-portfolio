import React, { useRef, useState } from "react";
import {
  FaPaperPlane,
  TbBrandGmail,
  SiGmail,
  FaLinkedinIn,
  FaLinkedin,
  IoLogoGithub,
} from "../ReactIcons";
import emailjs from "@emailjs/browser";
import { ButtonContactArrow, ButtonContactCopy } from "../Button";

export default function ContactSection() {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="bg-primary rounded-xl p-4 md:col-span-2 border border-lightGrey">
        <h2 className=" text-xl font-extrabold text-neon">
          Let’s connect on social platforms
        </h2>
      </div>
      <div className="md:col-span-2">
        <GmailCard />
      </div>

      <LinkedInCard />
      <GithubCard />
      <div className="md:col-span-2">
        <EmailForm />
      </div>
    </section>
  );
}

export const EmailForm = () => {
  const form = useRef();
  const [toastMsg, setToastMsg] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9j5gz7h", "template_ax0pwxs", form.current, {
        publicKey: "74SmkBJ1Xavnh-c77",
      })
      .then(
        () => {
          setToastMsg("✅ Message Sent Successfully");
          setTimeout(() => setToastMsg(""), 5000);
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setToastMsg("❌ Failed to send message. Please try again later.");
          setTimeout(() => setToastMsg(""), 5000);
        }
      );
  };

  return (
    <div className="bg-primary p-4 rounded-xl border border-lightGrey">
      <div className="flex gap-2 justify-center items-center mb-4">
        <h2 className="text-white text-xl">Send me a Message</h2>
        <FaPaperPlane className="text-neon text-xl" />
      </div>

      <form
        ref={form}
        id="contactForm"
        onSubmit={sendEmail}
        className=" text-white grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg"
      >
        <input
          type="text"
          name="from_name"
          required
          placeholder="Name"
          className="placeholder:text-lightGrey cursor-pointer border-2 border-lightGrey rounded-lg px-4 py-1"
        />
        <input
          type="email"
          name="from_email"
          required
          placeholder="Email"
          className="placeholder:text-lightGrey cursor-pointer border-2 border-lightGrey rounded-lg px-4 py-1"
        />
        <textarea
          name="from_message"
          placeholder="Message"
          rows={5}
          required
          className="placeholder:text-lightGrey cursor-pointer border-2 border-lightGrey rounded-lg px-4 py-1 md:col-span-2"
        ></textarea>
        <div className="flex justify-center md:col-span-2">
          <button
            type="submit"
            className="flex h-fit cursor-pointer items-center text-sm text-white font-medium py-2 px-10 rounded-lg bg-green-500 border border-black shadow-md shadow-green-400/50 active:scale-95 active:bg-green-500/90"
          >
            Send
            <FaPaperPlane className="ml-2" />
          </button>
        </div>
      </form>
      <div className="flex justify-center text-neon font-bold mt-3">
        <span>{toastMsg}</span>
      </div>
    </div>
  );
};

export const GmailCard = () => {
  const email = "sanchezchristianjoshua@gmail.com";
  const [copyText, setCopyText] = useState("Copy Email");

  const handleCopyEmail = async () => {
    console.log(navigator.clipboard);
    try {
      await navigator.clipboard.writeText(email);
    } catch (err) {
      console.error("Clipboard API failed, using fallback:", err);
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    } finally {
      setCopyText("Email Copied");
      setTimeout(() => setCopyText("Copy Email"), 3000);
    }
  };

  return (
    <div className="bg-gradient-to-tr from-red-800 to-red-300 rounded-xl h-40 relative overflow-hidden">
      <SiGmail className="size-60 absolute text-lightGrey/20 rotate-45 -top-10 -left-10" />
      <div className="relative z-10 p-6 flex h-full gap-4 justify-between">
        <div className="flex flex-col justify-between flex-1">
          <div>
            <span className="text-lg font-semibold text-white">
              Get in touch
            </span>
            <p className="text-gray-200 text-xs">
              Feel free to reach out to me anytime via email.
            </p>
          </div>

          <ButtonContactCopy className="bg-red-500" onClick={handleCopyEmail}>
            {copyText}
          </ButtonContactCopy>
        </div>

        <div className="flex items-end text-white">
          <TbBrandGmail className="size-15 border-5 border-gray-200 rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export const LinkedInCard = () => {
  return (
    <div className="bg-gradient-to-tr from-[#0b66c2]  to-blue-400 rounded-xl h-40 relative overflow-hidden">
      <FaLinkedin className="size-60 absolute text-lightGrey/20 rotate-45 -top-10 -left-10" />
      <div className="relative z-10 p-6 flex h-full gap-4 justify-between">
        <div className="flex flex-col justify-between flex-1">
          <div>
            <span className="text-lg font-semibold text-white">
              Happy to connect
            </span>
            <p className="text-gray-200 text-xs">
              Let’s build professional connections.
            </p>
          </div>

          <ButtonContactArrow
            className="bg-[#0b66c2]"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/christian-joshua-sanchez-211957322/",
                "_blank"
              )
            }
          >
            Go to LinkedIn
          </ButtonContactArrow>
        </div>

        <div className="flex items-end text-white">
          <FaLinkedinIn className="size-15 p-1 border-5 border-gray-200 rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export const GithubCard = () => {
  return (
    <div className="bg-gradient-to-tr from-gray-950  to-gray-600 rounded-xl h-40 relative overflow-hidden">
      <IoLogoGithub className="size-60 absolute text-lightGrey/20 rotate-45 -top-10 -left-10" />
      <div className="relative z-10 p-6 flex h-full gap-4 justify-between">
        <div className="flex flex-col justify-between flex-1">
          <div>
            <span className="text-lg font-semibold text-white">
              My GitHub Projects
            </span>
            <p className="text-gray-200 text-xs">
              Checkout what I’m building and learning.
            </p>
          </div>

          <ButtonContactArrow
            className="bg-gray-700"
            onClick={() => window.open("https://github.com/Siege-S", "_blank")}
          >
            Go to Github
          </ButtonContactArrow>
        </div>

        <div className="flex items-end text-white">
          <IoLogoGithub className="size-15 p-1 border-5 border-gray-200 rounded-2xl" />
        </div>
      </div>
    </div>
  );
};
