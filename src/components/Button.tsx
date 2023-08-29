interface ButtonProps{
    nome: string
    icone?: any
    className?: string
}
export default function Button(props: ButtonProps){
    return (
        <button className="flex border-2 border-[#3C60EE] px-3 py-1 justify-center text-[#3C60EE] hover:bg-[#3C60EE] hover:text-white duration-300 gap-3">
            {props.nome}{props.icone}
        </button>
    )
}