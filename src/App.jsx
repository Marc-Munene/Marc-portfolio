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

        {/* Hero section */}

        <div>
          <div>
            <img src="/public/munene.dev.png" alt="logo" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              repellendus ad assumenda id? Et, culpa. Similique dolores,
              adipisci pariatur consectetur quasi amet, accusamus quibusdam,
              ullam soluta fuga ad aspernatur ex.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { App };
