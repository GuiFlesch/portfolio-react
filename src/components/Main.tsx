import Image from "next/image";
import { MaquinaDeEscrever } from "./MaquinaDeEscrever";
import Button from "./Button";
import { IconUser } from "@tabler/icons-react";

export default function Main() {
  return (
    <main className="flex flex-col md:flex-row md:pb-44 mx-auto h-max w-full pt-3 gap-2 md:mt-24 items-center">
      <div className="flex flex-col w-full gap-2">
 
        <h1 className="text-3xl text-white py-1">Olá, eu sou</h1>
        <h1 className="text-4xl font-bold text-white py-1">Guilherme Flesch</h1>

        <MaquinaDeEscrever
          text="Front-end Developer"
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4F41F6] to-[#00BBD4] bg-clip-text text-transparent w-[90%]"
          delay={1000}
          esconderCursor
        />
      <h2 className="text-white tracking-wide leading-[18px] font-light text-base flex mb-2">
        Desenvolvedor criativo, motivado em fornecer soluções web de alto
        impacto que atendam
        <br /> às necessidades e desafios dos mais diferentes segmentos e
        organizações.
      </h2>
      <div>
      <Button nome="Sobre mim" icone={<IconUser />} />
      </div>
      </div>
      <div className="flex justify-center mx-auto mt-3 md:ml-32 hover:scale-110 duration-300 hover:rotate-3 w-full">
        <Image
          src="/GFlesch-img-2.png"
          width={300}
          height={300}
          alt="Foto de Guilherme Flesch"
          className="md:w-[400px] md:h-[400px]"
        />
      </div>
    </main>
  );
}
