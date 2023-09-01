import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Pagina from "@/components/Pagina";
import SectionAbout from "@/components/SectionAbout";
import Skills from "@/components/Skills";
import Image from "next/image";


export default function Home() {
  return (
    <Pagina>
      <Header/>
      <Main />
      <SectionAbout/>
      <Skills />
      <Experience/>
    </Pagina>
  );
}
