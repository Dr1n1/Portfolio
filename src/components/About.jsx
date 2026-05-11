import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import "./index.css";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaBitbucket,
  FaVuejs,
  FaBootstrap,
  FaGithub,
  FaShopify,
} from "react-icons/fa";
import {
  SiRedux,
  SiJira,
  SiFramer,
  SiTailwindcss,
  SiGnuprivacyguard,
} from "react-icons/si";
import { IoIosGitNetwork } from "react-icons/io";
import self from "../images/s.png";
import { GrGraphQl } from "react-icons/gr";
import { CgRemote } from "react-icons/cg";
import { IoIosMail } from "react-icons/io";
import DownloadButton from "./DownloadButton";

const workData = [
  {
    company: "NewFive",
    role: "Ful-stack Developer",
    date: "2024 - Present",
    logo: <CgRemote />,
  },
  {
    company: "Kutiza",
    role: "Front-End Developer",
    date: "2021 - 2023",
    logo: <CgRemote />,
  },
  {
    company: "PRonins",
    role: "Project-based, Full-Stack ",
    date: "2020 - Present",
    logo: <CgRemote />,
  },
  {
    company: "Freelance",
    role: "Web Developer",
    date: "2018 - Present",
    logo: <CgRemote />,
  },
];

const boxesData = [
  {
    title:
      "My Journey as a Freelance Website Application Developer",
    time: "Self-employed",
    description: [
      "Throughout my journey working with diverse clients, I've honed a skill set rooted in flexibility and adaptability. Each project I've encountered comes with its own set of unique challenges and objectives. I've embraced this variability with an open mind and a hunger for continual learning.",
      "My experience spans a wide spectrum of projects, each requiring tailored solutions. From multi-page web applications leveraging primarily Vue JS/React JS to crafting blogs using the MERN stack, and developing single-page applications utilizing both Vue and React, I've navigated through a myriad of technologies.",
      "Additionally, I've delved into content management systems like WordPress, further broadening my expertise. This diverse exposure has been invaluable in refining my ability to harness technology effectively. I've learned to adeptly leverage different tools and platforms to optimize performance and meet project timelines.",
      "Embracing versatility has enabled me to consistently deliver results that align with client expectations, regardless of the project's complexities. In essence, my journey has been characterized by a commitment to adaptability and a passion for embracing new challenges. With each project, I've not only expanded my technical repertoire but also cultivated a mindset that thrives in dynamic environments.",
    ],
  },
  {
    title: "Highlight Project: CRM System at Kutiza",
    time: "Kutiza",
    description: [
      "My role as a front-end developer at Kutiza provided me with the opportunity to contribute to a multitude of engaging projects, yet one endeavor truly stands out—the development of a Customer Relationship Management (CRM) system.",
      "This project presented a diverse set of technical challenges, requiring me to meticulously craft an intuitive user interface that seamlessly functioned across various devices. It had many pages, so in order to keep the loading time low I had to utilize reusable components.",
      "Furthermore, my involvement in a collaborative team emphasized the significance of clear communication and teamwork. By leveraging our collective skills and knowledge, we effectively delivered high-quality CRM systems tailored to exceed our clients' expectations.",
    ],
  },
  {
    title: "Shopify App Development: Sync Fusion",
    time: "NewFive",
    description: [
      <span key="link">
      <a
          href="https://apps.shopify.com/sync-fusion"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:underline"
      >
        Sync Fusion
      </a>
      .
    </span>,
      'At NewFive, I’ve focused on building high-performance Shopify applications—most notably Sync Fusion.',
      "This app was built to enhance inventory management: synchronizing inventory across grouped products.",
      "I was in charge of all the aspects of the App, from design and backend, to integration of Mantle to handle payment plans in Shopify marketplace.",
      "Sync Fusion empowers store owners to manage grouped inventory effortlessly and intuitively. It features real-time updates, group sync logic, and a user-friendly interface that blends seamlessly with Shopify's native admin.",
      "This project not only deepened my understanding of Shopify’s ecosystem but also allowed me to apply custom logic for inventory syncing, advanced error handling, and real-world app deployment within a commercial environment.",
      "I also earned verified credentials from Shopify Academy, including 'B2B on Shopify: Launch and Customization' and 'Liquid Storefronts for Theme Developers'. These certifications reinforce my ability to deliver professional-grade solutions within the Shopify platform.",
    ],
  }

];

const skillData = [
  { title: "React JS", icon: <FaReact />, category: "Front-End" },
  { title: "Node JS", icon: <FaNodeJs />, category: "Back-End" },
  { title: "Redux", icon: <SiRedux />, category: "Front-End" },
  { title: "Tailwind", icon: <SiTailwindcss />, category: "Front-End" },
  { title: "Bootstrap", icon: <FaBootstrap />, category: "Front-End" },
  { title: "GraphQL", icon: <GrGraphQl />, category: "APIs" },
  { title: "REST API", icon: <IoIosGitNetwork />, category: "APIs" },
  { title: "Git & Github", icon: <FaGithub />, category: "Tools" },
  { title: "Bitbucket", icon: <FaBitbucket />, category: "Tools" },
  { title: "Jira", icon: <SiJira />, category: "Tools" },
  { title: "ClickUp", icon: "", category: "Tools" },
  { title: "Toggl Track", icon: "", category: "Tools" },
  { title: "Framer Motion", icon: <SiFramer />, category: "Animations" },
  { title: "Gsap", icon: "", category: "Animations" },
  { title: "Shopify App Development", icon: <FaShopify />, category: "Shopify" },
  { title: "Shopify Liquid", icon: <SiGnuprivacyguard />, category: "Shopify" },
  { title: "Gadget Framework", icon: "", category: "Shopify" }
];

function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [messageSent, setMessageSent ] = useState(false)


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm("service_olw8hap", "template_9akok7w", e.target, {
        publicKey: "XrjnEy3yWVDzAkubM",
      });
      setMessageSent(true)

      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  function sendEmail() {
    window.location.href =
      "mailto:krasniqi.drin97@gmail.com?cc=krasniqi.drin97@gmail.com";
  }
  const groupedSkills = skillData.reduce((acc, skill) => {
    acc[skill.category] = acc[skill.category] || [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // Define the order in which categories should appear
  const categoryOrder = [
    "Front-End",
    "Back-End",
    "APIs",
    "Animations",
    "Tools",
    "Shopify"
  ];

  return (
    <div>
      <div className="sm:px-8 mt-9">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl text-left">
              <div className="max-w-2xl">
                <div className="imagecircle">
                  <img
                    className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 mb-10"
                    style={{ height: "220px", width: "200px" }}
                    src={self}
                  />
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                  Web-Application Developer.
                </h1>
                <p className="mt-6 text-base text-left text-zinc-600 dark:text-zinc-400">
                  I’m Drin, a web-application developer and a freelancer based in
                  Prishtina. 
                </p>
                <div className="mt-6 flex gap-6">
                  <a
                    className="group -m-1 p-1"
                    aria-label="Follow on X"
                    href="https://twitter.com/Dr1n1k"
                    target="blank"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                    >
                      <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z"></path>
                    </svg>
                  </a>
                  <a
                    className="group -m-1 p-1"
                    aria-label="Follow on Instagram"
                    href="https://www.instagram.com/drin.krasniqi_/"
                    target="blank"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                    >
                      <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path>
                      <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path>
                    </svg>
                  </a>
                  <a
                    className="group -m-1 p-1"
                    aria-label="Follow on GitHub"
                    href="https://github.com/Dr1n1"
                    target="blank"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="group -m-1 p-1"
                    aria-label="Follow on LinkedIn"
                    href="https://www.linkedin.com/in/drin-krasniqi-5524a4192/"
                    target="blank"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                    >
                      <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                    </svg>
                  </a>

                  {/*<div className="group -m-1 p-1" onClick={sendEmail}>*/}

                    <a
                        className="group -m-1 p-1"
                        aria-label="Follow on LinkedIn"
                        href="mailto:krasniqi.drin97@gmail.com"
                        target="blank"
                    >
                      <IoIosMail
                          size={24}
                          className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300 pointer:group-hover"
                      />
                    </a>
                  {/*</div>*/}
                </div>
              </div>
              <DownloadButton/>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:px-8 mt-24 md:mt-28">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                <div className="flex flex-col gap-16">
                  {boxesData.map((box, index) => (
                    <div
                      key={index}
                      className="group relative flex flex-col items-start"
                    >
                      <h2 className="text-base text-left font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                        <a href="" className="text-left">
                          <span className="relative z-10 text-white text-start changethiscolor">
                            {box.title}
                          </span>
                        </a>
                      </h2>
                      <time className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
                        <span
                          className="absolute inset-y-0 left-0 flex items-center"
                          aria-hidden="true"
                        >
                          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                        </span>
                        {box.time}
                      </time>
                      <div className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400 text-left">
                        {Array.isArray(box.description) ? (
                          box.description.map((paragraph, i) => (
                            <p className="pt-2" key={i}>
                              {paragraph}
                            </p>
                          ))
                        ) : (
                          <p>{box.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-10 lg:pl-16 xl:pl-24">
                  {/*<div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">*/}
                  {/*  <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">*/}
                  {/*    /!* <svg*/}
                  {/*            viewBox="0 0 24 24"*/}
                  {/*            fill="none"*/}
                  {/*            strokeWidth="1.5"*/}
                  {/*            strokeLinecap="round"*/}
                  {/*            strokeLinejoin="round"*/}
                  {/*            aria-hidden="true"*/}
                  {/*            className="h-6 w-6 flex-none"*/}
                  {/*          >*/}
                  {/*            <path*/}
                  {/*              d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"*/}
                  {/*              className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"*/}
                  {/*            ></path>*/}
                  {/*            <path*/}
                  {/*              d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"*/}
                  {/*              className="stroke-zinc-400 dark:stroke-zinc-500"*/}
                  {/*            ></path>*/}
                  {/*          </svg> *!/*/}
                  {/*    <svg*/}
                  {/*      xmlns="http://www.w3.org/2000/svg"*/}
                  {/*      viewBox="0 0 24 24"*/}
                  {/*      fill="currentColor"*/}
                  {/*      className="w-5 h-5"*/}
                  {/*    >*/}
                  {/*      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />*/}
                  {/*      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />*/}
                  {/*    </svg>*/}

                  {/*    <span className="ml-3">Reach out to me!</span>*/}
                  {/*  </h2>*/}
                  {/*  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 text-left">*/}
                  {/*    How can I help you? Sent your email here, I'll get back at*/}
                  {/*    you ASAP!*/}
                  {/*  </p>*/}
                  {/*  <div className="">*/}
                  {/*    <form className="mt-6 flex" onSubmit={handleSubmit}>*/}

                  {/*    <input*/}
                  {/*      type="email"*/}
                  {/*      placeholder="Email address"*/}
                  {/*      aria-label="Email address"*/}
                  {/*      required=""*/}
                  {/*      name="email"*/}
                  {/*      onChange={handleChange}*/}

                  {/*      className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"*/}
                  {/*    />*/}
                  {/*    <button*/}
                  {/*      className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"*/}
                  {/*      type="submit"*/}
                  {/*      >*/}
                  {/*      Sent*/}
                  {/*    </button>*/}
                  {/*      </form>*/}
                  {/*      {messageSent && <div className="mt-5">Message Sent!</div>}*/}
                  {/*  </div>*/}
                  {/*</div>*/}

                  <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                    <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {/* <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                              className="h-6 w-6 flex-none"
                            >
                              <path
                                d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                              ></path>
                              <path
                                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                                className="stroke-zinc-400 dark:stroke-zinc-500"
                              ></path>
                            </svg> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                          clip-rule="evenodd"
                        />
                        <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                      </svg>

                      <span className="ml-3">Work</span>
                    </h2>
                    <ol className="mt-6 space-y-4">
                      {workData.map((work, index) => (
                        <li key={index} className="flex gap-4">
                          <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            {/* <img
                                    alt=""
                                    loading="lazy"
                                    width="32"
                                    height="32"
                                    decoding="async"
                                    data-nimg="1"
                                    className="h-7 w-7"
                                    style={{ color: "transparent" }}
                                    src={work.logo}
                                  /> */}
                            {work.logo}
                          </div>
                          <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100 text-left">
                              {work.company}
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                              {work.role}
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                              className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                              aria-label={work.date}
                            >
                              {work.date}
                            </dd>
                          </dl>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                    <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {/* <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                              className="h-6 w-6 flex-none"
                            >
                              <path
                                d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                              ></path>
                              <path
                                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                                className="stroke-zinc-400 dark:stroke-zinc-500"
                              ></path>
                            </svg> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="ml-3">Skills</span>
                    </h2>
                    {categoryOrder.map((category) => (
                      <div key={category}>
                        <h2>{category}</h2>
                        <ol className="mt-6 space-y-4">
                          {groupedSkills[category].map((skill, index) => (
                            <li key={index} className="flex gap-4">
                              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                {skill.icon}
                              </div>
                              <dl className="flex flex-auto flex-wrap gap-x-2 items-center">
                                <dt className="sr-only">Title</dt>
                                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100 text-left ">
                                  {skill.title}
                                </dd>
                                {/* Add additional details here if needed */}
                              </dl>
                            </li>
                          ))}
                        </ol>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
