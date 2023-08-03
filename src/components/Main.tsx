import Image from "next/image";
import { MaquinaDeEscrever } from "./MaquinaDeEscrever";
import Button from "./Button";
import { IconUser } from "@tabler/icons-react";

export default function Main() {
  return (
    <main className="relative flex flex-col justify-center h-4/5 w-full">
        <div className="flex flex-col h-[8.5em] tracking-wider font-semibold ">
          <div>
            <MaquinaDeEscrever
              text="Olá, eu sou"
              className="text-3xl text-white py-1"
              esconderCursor
            />
          </div>
          <div>
            <MaquinaDeEscrever
              text="Guilherme Flesch"
              className="text-4xl font-bold text-white py-1"
              delay={1300}
              esconderCursor
            />
          </div>
          <div>
            <MaquinaDeEscrever
              text="Front-end Developer"
              className="text-4xl font-bold bg-gradient-to-r from-[#7441F6] to-[#D400D3] bg-clip-text text-transparent w-[28%]"
              delay={2800}
            />
          </div>
        </div>
      <h2 className="text-white tracking-wide font-normal text-base flex mb-6">
      Desenvolvedor criativo, motivado em fornecer soluções web de alto impacto que atendam<br /> às necessidades  e desafios dos mais diferentes segmentos e organizações.
      </h2>
      <div className="absolute right-36 hover:scale-110 duration-300 hover:rotate-3">
      <Image 
      src="/GFlesch-img.png"
      width={400}
      height={400}
      alt="Foto de Guilherme Flesch"/>
      </div>
      <Button nome="Sobre mim" icone={<IconUser/>}/>
    </main>
  );
}
