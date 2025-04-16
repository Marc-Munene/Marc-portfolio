import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const App = () => {
  return (
    <div>
      <div>
        <header>
          <nav>
            <div>
              <img src="/public/munene.dev2.png" alt="Logo" />
            </div>
            <div>
              <ul>
                <li>About</li>
                <li>Projects</li>
                <li>Profession</li>
              </ul>
            </div>
            <div>
              <FaGithub />
              <BsInstagram />
              <IoIosMail />
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export { App };
