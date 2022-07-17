import { menu } from "../header";
import s from "./mobileMenu.module.css";

type Props = { closeMenu: () => void };
export default function MobileMenu({ closeMenu }: Props) {
  const renderMenu = () => {
    return menu.map((menuElem) => {
      return (
        <a href={`#${menuElem}`} onClick={() => closeMenu()}>
          {menuElem}
        </a>
      );
    });
  };
  return <div className={s.mobileMenu}>{renderMenu()}</div>;
}
