import { v4 as uuidv4 } from "uuid";

// components
import { Container } from "./Container";

// assets
import logo from "../assets/logo.svg";

export const Header = () => {
  const nav_links = ["shop", "brands", "contact us"];

  return (
    <header className="pt-[54px]">
      <Container>
        <nav className="flex items-center">
          <a href="#">
            <img src={logo} alt="KING" />
          </a>

          <ul className="flex gap-[90px] text-xl font-medium ml-auto">
            {nav_links.map((link) => (
              <li className="text-k-black capitalize " key={uuidv4()}>
                <a href={`#${link}`}>{link}</a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="bg-k-black text-white px-9 py-3.5 text-xl rounded-[50px] ml-[108px] font-medium transition hover:opacity-80 active:scale-95 active:opacity-100"
          >
            Sign up
          </button>
        </nav>
      </Container>
    </header>
  );
};
