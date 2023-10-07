import Header from "@/components/HomePage/Header"
import AboutPage from "@/components/AboutPage/AboutPage"
import Cursor from "@/components/common/Cursor"
import Skills from "@/components/Skills/Skills"
export default function Home() {
  return (
    <main>
      <Cursor />
      <Header />
      <AboutPage />
      <Skills />
    </main>
  )
}
