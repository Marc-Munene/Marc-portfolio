import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const App = () => {
  return (
    <div className="min-h-screen bg-bckg text-primary">
      <div>
        <header>
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
            <div>
              <ul className="flex space-x-8 text-xl md:text-2xl">
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

        <div className="flex items-center gap-8  px-40 py-20 max-w-7xl  mx-auto">
          <div className="flex-shrink-0">
            <img
              src="/public/_A647239_resized.jpg"
              alt="logo"
              className="h-90 w-auto object-contain rounded-2xl"
              // style={{
              //   clipPath:
              //     "polygon(25% 6%, 80% 6%, 100% 50%, 80% 94%, 25% 94%, 0% 50%)",
              // }}
            />
          </div>

          <div className="ml-10">
            <p className="sm:text-lg md:text-2xl">
              <span className="text-pink-500">&lt;span&gt;</span>
              Hey, I'm Marc
              <span className="text-pink-500"> &lt;/span&gt;</span>
            </p>
            <h1 className="text-3xl md:text-5xl font-mono font-semibold mt-2">
              <span className="text-green-400">{`{Full Stack}`}</span>
              <br />
              Web Developer<span className="text-cyan-500">_</span>
            </h1>
            <p className="mt-4 sm:text-lg md:text-2xl text-gray-400 ">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export { App };
