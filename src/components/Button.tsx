interface ButtonProps{
    nome: string
    icone?: any
}
export default function Button(props: ButtonProps){
    return (
        <button className="flex border-2 border-violet-700 py-2 px-4 w-40 justify-center text-violet-700 hover:bg-violet-700 hover:text-white duration-300 gap-3">
            {props.nome}{props.icone}
        </button>
    )
}