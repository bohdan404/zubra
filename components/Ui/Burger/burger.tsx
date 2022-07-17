import { useState } from "react";
import MobileMenu from "../Header/MobileMenu/mobileMenu";
import s from "./burger.module.css";

export default function Burger() {
  const [open, setOpen] = useState(false);
  return (
    <div className={s.wrap} onClick={() => setOpen(!open)}>
      <div className={open ? s.openBurger : s.burger}>
        <div />
      </div>
      {open && <MobileMenu closeMenu={() => setOpen(false)} />}
    </div>
  );
}
