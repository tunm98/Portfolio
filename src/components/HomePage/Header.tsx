"use client";
import { FC, useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="container mx-auto text-lg h-screen">
      <div className="py-[30px] flex justify-between">
        <nav className="flex gap-[35px]">
          {tabs.map((item, index) => (
            <a
              key={item.name}
              href={item.link}
              className={clsx(
                "hover:text-yellow relative",
                {
                  [styles.active]: activeTab === index,
                },
                {
                  [styles.hoverActive]: activeTab !== index,
                }
              )}
              onClick={() => setActiveTab(index)}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <p>
          Email:{" "}
          <span className="text-yellow ">nguyenmanhtu.ftu@gmail.com</span>
        </p>
      </div>
      <div
        className={clsx(
          "mx-auto w-fit mt-[200px] flex justify-center flex-col gap-5",
          styles.introduction
        )}
      >
        <div className="flex">
          <h1 className=" font-bold ">
            Hello <span>.</span>
          </h1>
        </div>
        <div className="flex gap-[70px]">
          <h1 className="font-bold">I am</h1>
          <div className="text-lg leading-[30px] flex flex-col justify-center italic font-medium">
            <p>Front-end Developer</p>
            <p>With 1 year experience</p>
            <p>based in Hanoi, Vietnam</p>
          </div>
        </div>
        <h1 className="font-bold">Otis Nguyen</h1>
      </div>
    </div>
  );
};

export default Header;

const tabs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Blog",
    link: "/blog",
  },
];
