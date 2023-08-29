import { useState } from "react";
import GFlesch from "./GFlesch";
import Menu from "./Menu";
import { IconMenu2 } from "@tabler/icons-react";

export default function Header(props: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="flex mx-auto pt-2 w-full justify-between items-center md:p-5">
          <GFlesch />
          <IconMenu2 onClick={toggleMenu} color="white" size={30}/>
    </header>
  );
}
