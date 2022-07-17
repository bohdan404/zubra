import Burger from "../Burger/burger";
import Grid from "../Grid/grid";
import s from "./header.module.css";

export const menu = [
  "Про проект",
  "Переваги",
  "Локація",
  "Планування",
  "Комплектація",
  "Контакти",
];
export default function Header() {
  const renderMenu = () => {
    return menu.map((menuElem) => {
      return <a href={`#${menuElem}`}>{menuElem}</a>;
    });
  };

  return (
    <div className={s.header}>
      <Grid>
        <div className={s.headerWrap}>
          <div className={s.Logo}>ЗУБРА ДІМ</div>
          <div className={s.burger}>
            <Burger />
          </div>
          <div className={s.menu}>{renderMenu()}</div>
        </div>
      </Grid>
    </div>
  );
}
