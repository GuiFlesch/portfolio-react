import Image from "next/image";
import Button from "./Button";
import { IconDownload } from "@tabler/icons-react";

export default function SectionAbout() {
  return (
    
    <section className={`flex flex-col mt-5 mx-auto md:mt-40 text-white gap-3`}>
      <hr className="animate-hrAnimation border-none p-[2px] rounded-lg"/>
      <h1 className="text-2xl font-bold pt-2">Meu nome é Guilherme.</h1>
      <p className="text-base pt-1 tracking-wide leading-[18px] font-light">
        Olá! Sou um desenvolvedor apaixonado por
        tecnologia e inovação. Minha jornada na área teve início em 2020 e,
        desde então, venho expandindo meus conhecimentos em diversas áreas e
        linguagens de programação.
      </p>
      <p className="text-base pt-1 tracking-wide leading-[18px] font-light">
      Ao longo dos meus estudos, tive a oportunidade de trabalhar em projetos de
      back-end com tecnologias como Java, C#, MySQL e também utilizei frameworks
      como Springboot, .NET e ASP.NET. Meu interesse em criar boas experiências
      digitais me levou a desenvolver habilidades em UI/UX, buscando sempre a
      melhor forma de combinar estética e usabilidade em meus projetos.
      </p>
      <div className="mt-3">
        <Button nome="Download CV" icone={<IconDownload />} />
      </div>
      <br />
      <p></p>
    </section>
  );
}
