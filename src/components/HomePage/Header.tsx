"use client"
import { FC, useState, useEffect } from "react"
import clsx from "clsx"
import styles from "./styles.module.css"
interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [isSticky, setSticky] = useState<boolean>(false)
  const fullText = "Otis Nguyen"
  const [text, setText] = useState<string>("")
  const [index, setIndex] = useState<number>(0)
  const [deleting, setDeleting] = useState<boolean>(false)
  // const [cursorVisible, setCursorVisible] = useState(true)

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const updateText = () => {
      setText(
        deleting ? fullText.slice(0, index - 1) : fullText.slice(0, index + 1)
      )
      setIndex((prevIndex) => (deleting ? prevIndex - 1 : prevIndex + 1))
    }

    let timeoutId: NodeJS.Timeout

    if (!deleting && index < fullText.length) {
      timeoutId = setTimeout(updateText, 200) // Typing speed
    } else if (deleting && index > 0) {
      timeoutId = setTimeout(updateText, 50) // Deleting speed
    } else if (index === fullText.length) {
      timeoutId = setTimeout(() => setDeleting(true), 500) // Pause before start deleting
    } else if (index === 0) {
      timeoutId = setTimeout(() => setDeleting(false), 500) // Pause before start typing again
    }

    // Cleanup
    return () => clearTimeout(timeoutId)
  }, [index, deleting])

  // useEffect(() => {
  //   const cursorInterval = setInterval(() => {
  //     setCursorVisible((prevCursorVisible) => !prevCursorVisible)
  //   }, 300) // Cursor blink speed

  //   return () => clearInterval(cursorInterval) // Cleanup
  // }, [])

  return (
    <div className=" text-lg ">
      <div className={clsx({ [styles.navigation]: isSticky })}>
        <div className="py-[30px] flex justify-between container mx-auto">
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
            <span className="text-yellow ml-1"> tunm.dev98@gmail.com</span>
          </p>
        </div>
      </div>
      <div
        className={clsx(
          "mx-auto w-fit mt-[200px] flex justify-center flex-col gap-5 container ",
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
        <h1 className={clsx("min-w-[850px] h-[134px]", styles.name)}>
          {text}{" "}
          {/* <span className={clsx("cursor", { [styles.blink]: cursorVisible })}>
            |
          </span> */}
        </h1>
      </div>
    </div>
  )
}

export default Header

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
]
