import { FC } from "react";
import Image from "next/image";
import Avatar from "@/assets/png/avatar.png";
import clsx from "clsx";
import styles from "./styles.module.css";
interface AboutPageProps {}
const information = [
  { name: "Age", value: "25" },
  { name: "Language", value: "Vietnamese, English" },
  { name: "Freelance", value: "Available" },
  { name: "Address", value: "Hanoi City, Vietnam" },
  { name: "Phone/Zalo", value: "0355133232" },
  { name: "Email", value: "tunm.dev98@gmail.com" },
  { name: "Telegram", value: "@tunmDev" },
  { name: "Github", value: "https://github.com/tunm98" },
  //   { name: "Linkedin", value: " https://www.linkedin.com/in/tunmDeveloper/" },
];
const linkedin = {
  name: "Linkedin",
  value: " https://www.linkedin.com/in/tunmDeveloper/",
};
const AboutPage: FC<AboutPageProps> = ({}) => {
  return (
    <div className="container mx-auto">
      <div className="flex gap-5 justify-center">
        <Image src={Avatar} width={300} height={470} alt="my avatar" />
        <div>
          <h1 className="text-70 font-bold text-yellow">Tu Manh Nguyen</h1>
          <h1 className="text-70 font-bold ">(Otis Nguyen)</h1>
          <div className="grid grid-cols-2 mt-9 gap-x-[50px] gap-y-[10px] text-lg pl-[50px]">
            {information.map((item, index) => (
              <div key={index} className="flex justify-between">
                <p
                  className={clsx(
                    "font-bold text-grey mr-[7px] flex items-center gap-5",
                    styles.list
                  )}
                >
                  {item.name}:
                </p>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
          <div className="flex mt-[10px] pl-[50px] text-lg">
            <p
              className={clsx(
                "font-bold text-grey mr-[7px] flex items-center gap-5",
                styles.list
              )}
            >
              {linkedin.name}:
            </p>
            <p>
              <a
                href={linkedin.value}
                target="_blank"
                className="hover:text-yellow"
              >
                {linkedin.value}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
