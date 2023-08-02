import GFlesch from "./GFlesch";
import Menu from "./Menu";

export default function Header(props: any) {
  return (
    <header className={`flex items-center w-full h-8 justify-between`}>
      <GFlesch />
      <Menu />
    </header>
  );
}
