import { FC } from "react";

interface HeaderProps {}
const navItems = ["Home", "About", "Portfolio", "Contact", "Blog"];
const Header: FC<HeaderProps> = ({}) => {
  return (
    <div>
      <div>
        <nav>
          {navItems.map((item) => (
            <a key={item} href="#">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
