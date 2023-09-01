import Image from "next/image";

interface CardSkillProps {
  name: string;
  className?: string;
  icon?: any;
}

export default function CardSkill(props: CardSkillProps) {
  return (
    <div
      className={`flex flex-col bg-[#212121] h-[120px] w-[120px] gap-3 rounded-tl-3xl items-center justify-center text-[#4F41F6] font-bold border-b-4 border-[#4F41F6] ${
        props.className ?? ""
      }`}
    >
      {props.name}
      <div
        style={{ color: "#4F41F6"}}
        className="flex justify-center w-12 h-12 mb-2 items-center"
      >
        <Image src={props.icon} alt="logo" height={50} width={50}/>
      </div>
    </div>
  );
}
