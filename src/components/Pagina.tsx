import Grade from "./Grade";

interface PaginaProps{
    children?: any;
  }
export default function Pagina(props: PaginaProps){
    return (
        <div className={`flex w-screen h-full bg-[#13131f] overflow-x-hidden`}>
            <Grade>
                {props.children}
            </Grade>
        </div>
    )
}