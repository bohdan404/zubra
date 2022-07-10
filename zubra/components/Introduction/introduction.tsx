import Grid from "../Ui/Grid/grid";
import s from "./introduction.module.css";
// import introduction from "../../public/introduction.jpg";

export default function Introduction() {
  return (
    <div className={s.introduction}>
      <Grid>
        <div className={s.introWrap}>
          <p> Новий вимір комфортного життя у місті</p>
          <div>
            <p> ЗУБРА ДІМ</p>
            <p> житловий комплекс</p>
          </div>
        </div>
      </Grid>
    </div>
  );
}
