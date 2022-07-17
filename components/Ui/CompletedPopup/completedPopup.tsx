import s from "./completedPopup.module.css";
import cancle from "../../../public/cancle.svg";

type Props = {
  close?: () => any;
};
export default function CompletedPopup({ close }: Props) {
  return (
    <div className={s.completedPopup}>
      <div className={s.content}>
        <div className={s.header}>
          <div onClick={() => close && close()}>
            <img className={s.img} src={cancle} alt="cancle" />
          </div>
        </div>
        <div className={s.wrap}>
          <p className={s.title}>Дякуємо!</p>
          <p className={s.mainText}>Наш менеджер зв’яжеться з вами</p>
        </div>
      </div>
    </div>
  );
}
