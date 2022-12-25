import { GetStaticProps } from "next";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";
import Link from "next/link";
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 bg-[rgb(36,36,36)] text-white z-0">
    <Header  />

    {/* Hero Banner Section */}
    <section id="hero" className="snap-start">
      <Hero />
    </section>

    {/* About Section */}
    <section id="about" className="snap-center">
      <About  />
    </section>

    {/* Experience Section */}
    <section id="experience" className="snap-center">
      <WorkExperience  />
    </section>

    {/* Skills Section */}
    <section id="skills" className="snap-start">
      <Skills />
    </section>

    {/* Projects Section */}
    {/* <section id="projects" className="snap-start">
      <Projects projects={projects} />
    </section> */}

    {/* Contact Me Section */}
    {/* <section id="contact" className="snap-start">
      <ContactMe pageInfo={pageInfo} />
    </section> */}

    <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <img
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            src="https://i.imgur.com/e2yvD6A.png"
            alt=""
          />
        </div>
      </footer>
    </Link>
  </div>
  )
}
