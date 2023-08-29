import MenuItem from "./MenuItem";

export default function Menu(props: any){
    return (
        <nav>
            <ul className="flex gap-5 text-white">
                <MenuItem nome="Home"/>
                <MenuItem nome="About"/>
                <MenuItem nome="Portfólio"/>
            </ul>
        </nav>
    )
}