import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const App = () => {
  return (
    <div className="min-h-screen bg-bckg text-primary">
      <div>
        <header>
          {/* navbar */}
          <nav className="flex flex-row items-center justify-between ">
            {/* logo */}
            <div>
              <img
                src="/public/munene.dev2.png"
                alt="Logo"
                className="h-15 w-auto ml-4 py-1"
              />
            </div>

            {/*  Navigation Links*/}
            <div className="hidden md:flex flex-grow justify-center">
              <ul className="flex space-x-8 sm:text-sm md:text-2xl lg:text-3xl">
                <li className="  font-medium cursor-pointer ">About</li>
                <li className="  font-medium cursor-pointer ">Projects</li>
                <li className="  font-medium cursor-pointer ">Profession</li>
              </ul>
            </div>
            <div className="flex space-x-4">
              <FaGithub size={24} className="cursor-pointer" />
              <BsInstagram size={24} className="cursor-pointer" />
              <IoIosMail className="mr-4 cursor-pointer" size={24} />
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section id="hero" className=" py-10 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
              {/* Image */}
              <div className="md:flex-shrink-0">
                <img
                  src="/public/_A647239_resized.jpg"
                  alt="Marc's Profile"
                  className="rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm md:w-80 lg:w-96 h-auto object-cover border-4 border-cyan-500"
                />
              </div>

              {/* Text Content */}
              <div className="md:flex-1 text-center md:text-left">
                <p className="text-lg sm:text-xl md:text-2xl">
                  <span className="text-pink-500">&lt;span&gt;</span>
                  Hey, I'm Marc
                  <span className="text-pink-500">&lt;/span&gt;</span>
                </p>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono font-semibold mt-2">
                  <span className="text-green-400">{`{Full Stack}`}</span>
                  <br className="hidden sm:block" />
                  Web Developer<span className="text-cyan-500">_</span>
                </h1>

                <p className="mt-4 text-base sm:text-lg text-gray-400">
                  <span className="text-pink-500">&lt;p&gt;</span> With
                  expertise in cutting-edge technologies such as{" "}
                  <span className="text-green-400">NodeJS</span>,{" "}
                  <span className="text-white">ExpressJS</span>,{" "}
                  <span className="text-blue-500">React</span>,{" "}
                  <span className="text-yellow-500">Python</span>,{" "}
                  <span className="text-blue-600">Typescript</span>, and{" "}
                  <span className="text-green-400">MongoDB</span>... I deliver
                  web solutions that are both innovative and robust.{" "}
                  <span className="text-pink-500">&lt;/p&gt;</span>
                </p>

                <div className="mt-6">
                  <button className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 px-4 py-2 sm:px-6 sm:py-3 rounded-lg cursor-pointer transition-all duration-300">
                    Contact Me?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About section*/}
        <section
          id="about"
          className="py-12 md:py-20 bg-gray-900/5 dark:bg-gray-800/50"
        >
          <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
            {/* Section Title */}
            <div className="flex justify-center mb-10 md:mb-16">
              <h1 className="text-3xl sm:text-4xl font-bold text-cyan-500 relative">
                About Me
                <span className="absolute -bottom-2 left-0 right-0 mx-auto w-16 h-1 bg-cyan-500/50"></span>
              </h1>
            </div>

            {/* Content Container */}
            <div className="flex flex-col md:flex-row items-center gap-5 lg:gap-10">
              {/* Text Content */}
              <div className="md:flex-1 text-center md:text-left">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  Crafting clean code & building seamless experiences.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                  Full-stack developer by day, debugger by night, and caffeine
                  enthusiast 24/7. I build things that work (most of the time)
                  and laugh at my own bugs (after fixing them). Let us create
                  something awesome—preferably with fewer merge conflicts.
                </p>
              </div>

              {/* Image */}
              <div className="md:flex-shrink-0">
                <img
                  src="/public/unsplash (1).jpg"
                  alt="Coding workspace"
                  className="rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm md:w-80 lg:w-96 h-auto object-cover border-4 border-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Personal Projects */}
        <section id="projects" className="py-12 md:py-20 border bg-bckg">
          {/* Title Section - Improved Responsiveness */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-10 md:mb-16">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-500 relative">
                Personal Projects
                <span className="absolute -bottom-2 left-0 right-0 mx-auto w-16 h-1 bg-cyan-500/50"></span>
              </h1>
            </div>

            {/* Projects Grid - Improved Responsiveness */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 w-full max-w-7xl">
                {/* Classify */}
                <div className="bg-gray-200 dark:bg-gray-600 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
                  <div className="relative">
                    <img
                      className="w-full h-48 md:h-56 object-cover"
                      src="/public/Classify.png"
                      alt="Classify"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      Classify
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-4">
                      A web app meant for students to search for a vacant class
                      to occupy, during a session or exams
                    </p>
                    <div className="flex justify-end">
                      <a
                        href="https://classify-project.vercel.app/"
                        target="blank"
                      >
                        <button className="bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                          View Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-200 dark:bg-gray-600 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
                  <div className="relative">
                    <img
                      className="w-full h-48 md:h-56 object-cover"
                      src="/public/KLADI.png"
                      alt="Kladi-outfits"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      Kladi Outfits
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-4">
                      A full-featured e-commerce platform with real-time
                      inventory management, payment processing, and admin
                      dashboard.
                    </p>
                    <div className="flex justify-end">
                      <a
                        href="https://kladi-outfits.vercel.app/"
                        target="blank"
                      >
                        <button className="bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 cursor-pointer">
                          View Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                {/*Hangover football  */}

                <div className="bg-gray-200 dark:bg-gray-600 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
                  <div className="relative">
                    <img
                      className="w-full h-48 md:h-56 object-cover"
                      src="/public/hangover.png"
                      alt="Hangover football website"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      Hangover Football Academy
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-4">
                      A football club website, entailing every detail of the
                      club, from the partnersgym, field and partners.
                    </p>
                    <div className="flex justify-end">
                      <a
                        href="https://hangover-football-club.vercel.app/"
                        target="blank"
                      >
                        <button className="bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 cursor-pointer">
                          View Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export { App };
