interface ButtonProps{
    nome: string
    icone?: any
}
export default function Button(props: ButtonProps){
    return (
        <button className="flex border-2 border-[#3C60EE] py-2 px-4 w-40 justify-center text-[#3C60EE] hover:bg-[#3C60EE] hover:text-white duration-300 gap-3">
            {props.nome}{props.icone}
        </button>
    )
}