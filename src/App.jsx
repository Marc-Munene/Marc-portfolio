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

        {/* Hero section */}

        <div className="flex flex-col lg:flex-row items-center gap-6 sm:px-10 md:px-20 lg:px-40 py-10 md:py-20  max-w-7xl mx-auto">
          <div className="w-full lg:w-auto lg:flex-shrink-0">
            <img
              src="/public/_A647239_resized.jpg"
              alt="logo"
              className="h-48 sm:h-64 md:h-80 lg:h-96 w-auto object-contain rounded-2xl shadow-lg"
              // style={{
              //   clipPath:
              //     "polygon(25% 6%, 80% 6%, 100% 50%, 80% 94%, 25% 94%, 0% 50%)",
              // }}
            />
          </div>

          <div className="text-center lg:text-left lg:ml-6 xl:ml-10">
            <p className="text-base sm:text-lg md:text-2xl lg:tex-2xl">
              <span className="text-pink-500">&lt;span&gt;</span>
              Hey, I'm Marc
              <span className="text-pink-500"> &lt;/span&gt;</span>
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2">
              <span className="text-green-400">{`{Full Stack}`}</span>
              <br />
              Web Developer<span className="text-cyan-500">_</span>
            </h1>
            <p className="mt-4 tex-sm sm:text-base md:text-4xl lg:text-xl text-gray-400 ">
              <span className="text-pink-500">&lt;p&gt;</span> With expertise in
              cutting-edge technologies such as{" "}
              <span className="text-green-400">NodeJS</span>,{" "}
              <span className="text-white">ExpressJS</span>,{" "}
              <span className="text-blue-500">React</span>,{" "}
              <span className="text-yellow-500">Python</span>,{" "}
              <span className="text-blue-600">Typescript</span>, and{" "}
              <span className="text-green-400">MongoDB</span>... I deliver web
              solutions that are both innovative and robust.{" "}
              <span className="text-pink-500">&lt;/p&gt;</span>
            </p>
            <div className="mt-6">
              <button className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 px-4 py-2 sm:px-6 sm:py-3 rounded-lg cursor-pointer transition-all duration-300">
                Contact Me?
              </button>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="flex border items-center mx-auto">
          <div className="">
            <div className="flex justify-center">
              <h1 className="font-bold text-4xl">About Me</h1>
            </div>
            <p className="font-bold">
              Crafting clean code & building seamless experiences.
            </p>
            <br />
            <span className="">
              Full-stack developer by day, debugger by night, and caffeine
              enthusiast 24/7. I build things that work (most of the time) and
              laugh at my own bugs (after fixing them). Let’s create something
              awesome—preferably with fewer merge conflicts.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { App };
