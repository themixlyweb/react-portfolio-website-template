import Head from "next/head";
import Link from "next/link";
import {
  FaDribbble,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

/**
 * Home Page - Portfolio landing page showcasing developer profile.
 * @returns {JSX.Element}
 */

const socialLinks = [
  {
    href: "https://dribbble.com",
    label: "Dribbble",
    icon: FaDribbble,
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: FaTwitter,
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://github.com",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "mailto:your-email@example.com",
    label: "Email",
    icon: FaEnvelope,
  },
];

const serviceCard = [
  {
    title: "DYNAMIC ANIMATION, MOTION DESIGN",
    gradient: "from-orange-400 to-red-500",
    iconColor: "black",
    bgColor: "white",
    textColor: "text-white",
    hoverShadow: "hover:shadow-[0_25px_50px_rgba(255,87,34,0.4)]",
  },
  {
    title: "FRAMER, FIGMA, WORDPRESS, REACTJS",
    gradient: "from-lime-300 to-green-400",
    iconColor: "white",
    bgColor: "black",
    textColor: "text-black",
    hoverShadow: "hover:shadow-[0_25px_50px_rgba(132,204,22,0.3)]",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-poppins">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          PortFoliofy – React & Next.js Personal Portfolio Website Template
        </title>
        <meta
          name="description"
          content="Free React & Next.js template for developers to build modern, personal portfolio websites."
        />
        <meta property="og:type" content="website template" />
        <meta
          property="og:title"
          content=" PortFoliofy – React & Next.js Personal Portfolio Website Template"
        />
        <meta
          property="og:description"
          content="Free React & Next.js template for developers to build modern, personal portfolio websites."
        />
        <meta
          property="og:url"
          content="https://github.com/themixlyweb/react-portfolio-website-template/"
        />
        <meta
          property="og:image"
          content="https://themixly.com/wp-content/uploads/2025/07/image-1-4-scaled.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://themixly.com/wp-content/uploads/2025/07/image-1-4-scaled.jpg"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content=" PortFoliofy – React & Next.js Personal Portfolio Website Template"
        />
        <meta
          name="twitter:description"
          content="Free React & Next.js template for developers to build modern, personal portfolio websites."
        />
        <meta
          name="twitter:image"
          content="https://themixly.com/wp-content/uploads/2025/07/image-1-4-scaled.jpg"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="flex flex-col md:flex-row">
        {/* Sidebar with Profile */}
        <aside className="md:sticky md:top-0 md:h-screen md:w-1/2 lg:w-2/5 bg-white text-black p-8 md:rounded-r-3xl shadow-lg flex justify-center items-center">
          <div className="flex flex-col items-center text-center space-y-5">
            <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-1">
              <img
                src="/arhanImage.webp"
                alt="Liam Navarro Profile Picture"
                className="w-80 h-96 object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
            <h2 className="text-2xl font-extrabold">Liam Navarro</h2>
            <p className="text-gray-600 max-w-xs">
              A Software Engineer who has developed countless innovative
              solutions.
            </p>
            {/* Social Links */}
            <nav aria-label="Social media links">
              <ul className="flex space-x-4 text-orange-500 text-xl">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="transition-transform hover:scale-150"
                    >
                      <Icon />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <section className="w-full md:w-1/2 lg:w-4/5 overflow-y-auto p-8 space-y-16">
          {/* Hero Section */}
          <header className="p-8 text-center sm:text-left">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight relative inline-block pb-6">
              SOFTWARE <br />
              <span className="text-[#6a6a6a] font-extrabold">ENGINEER</span>
              <span className="absolute bottom-0 left-12 sm:left-0 w-40 h-1 bg-gradient-to-r from-red-500 to-orange-400 rounded-full"></span>
            </h1>
            <p className="mt-6 text-gray-400 w-full lg:w-3/4">
              Passionate about crafting intuitive, engaging digital experiences.
              I blend technical excellence with user-centered design to deliver
              high-impact, performant solutions.
            </p>
            {/* Stats */}
            <div className="flex flex-wrap gap-12 mt-10 justify-center lg:justify-start">
              {[
                { value: "+12", label: "Years of Experience" },
                { value: "+46", label: "Projects Completed" },
                { value: "+20", label: "Worldwide Clients" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-5xl font-semibold">{value}</p>
                  <h3 className="text-m text-gray-400 uppercase">{label}</h3>
                </div>
              ))}
            </div>
          </header>

          {/* Services Cards */}
          <section
            className="w-full xl:w-4/5 sm:pb-8 sm:pe-8"
            aria-label="Service Highlights"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 perspective-[1000px]">
              {serviceCard.map(
                (
                  {
                    title,
                    gradient,
                    bgColor,
                    iconColor,
                    textColor,
                    hoverShadow,
                  },
                  index
                ) => (
                  <div
                    key={index}
                    className={`group [transform-style:preserve-3d] transition-transform duration-500 hover:rotate-x-[6deg] hover:rotate-y-[6deg] bg-gradient-to-br ${gradient} ${textColor} p-6 rounded-xl relative overflow-hidden backdrop-blur-md bg-opacity-60 border border-white/10 ${hoverShadow}`}
                  >
                    <div className="absolute inset-0 opacity-10 bg-cover" />
                    <div className="relative z-10">
                      <div className="mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold leading-snug">
                        {title}
                      </h3>
                      <div className="mt-4 text-right">
                        <button
                          className={`p-2 bg-${bgColor} text-${iconColor} rounded-full shadow-md hover:shadow-lg transition`}
                          aria-label="Learn more"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill={"currentColor"}
                            className="w-4 h-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center text-xs text-gray-500">
            Made by <span className="text-orange-400">Liam</span> | Powered by{" "}
            <span className="text-orange-400">Next.js</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
