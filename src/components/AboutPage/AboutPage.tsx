import { FC } from "react"
import Image from "next/image"
import Avatar from "@/assets/png/avatar.png"
import clsx from "clsx"
import styles from "./styles.module.css"
import { information, linkedin } from "@/api/consts"

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = ({}) => {
  return (
    <div className="container mx-auto mt-[230px]">
      <div className="flex gap-[50px] justify-center items-center">
        <Image src={Avatar} width={300} height={470} alt="my avatar" />
        <div>
          <h1 className="text-70 font-bold ">Tu Nguyen (Otis)</h1>
          {/* <h1 className="text-70 font-bold mt-[-20px]">(Otis Nguyen)</h1> */}
          <div className="grid grid-cols-2 gap-x-[70px] mt-[30px] gap-y-[15px] text-lg pl-[50px]">
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
                {item.name === "Github" ? (
                  <p>
                    <a
                      href={item.value}
                      target="_blank"
                      className="hover:text-yellow"
                    >
                      {item.value}
                    </a>
                  </p>
                ) : (
                  <p>{item.value}</p>
                )}
              </div>
            ))}
          </div>
          <div className="flex mt-[15px] pl-[50px] text-lg">
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
  )
}

export default AboutPage
