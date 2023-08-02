interface MenuItemProps {
  nome: string;
}
export default function MenuItem(props: MenuItemProps) {
  return (
    <li className="text-white hover:text-violet-700 cursor-pointer transition-colors duration-300 font-semibold tracking-wider">
        {props.nome}
    </li>
  );
}
