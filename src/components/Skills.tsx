import { faCss3, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import CardSkill from "./CardSkill";
import  IconReact from "../assets/icons/react.svg"
import IconTypeScript from "../assets/icons/typescript.svg"
import IconJavaScript from "../assets/icons/javascript.svg"
import IconHtml from "../assets/icons/html.svg"
import IconCss from "../assets/icons/css.svg"

export default function Skills() {

  return (
    <section className={`flex flex-col gap-5 justify-center` }>
      <h1 className="text-2xl font-bold pt-2 text-white">Habilidades</h1>
      <div className={`grid grid-cols-2 md:grid-cols-8 gap-8 justify-items-center`}>
        <CardSkill name="CSS" icon={IconCss} />
        <CardSkill name="HTML" icon={IconHtml} />
        <CardSkill name="Javascript" icon={IconJavaScript} />
        <CardSkill name="Typescript" icon={IconTypeScript} />
        <CardSkill name="React" icon={IconReact} />
      </div>
    </section>
  );
}
