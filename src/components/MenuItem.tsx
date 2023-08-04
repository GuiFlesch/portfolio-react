interface MenuItemProps {
  nome: string;
}
export default function MenuItem(props: MenuItemProps) {
  return (
    <li className="text-white hover:text-[#3C60EE] cursor-pointer transition-colors duration-300 font-semibold tracking-wider">
        {props.nome}
    </li>
  );
}
