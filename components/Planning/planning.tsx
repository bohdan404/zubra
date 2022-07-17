import Grid from "../Ui/Grid/grid";
import s from "./planning.module.css";
import Rooms from "./Rooms/rooms";

export default function Planning() {
  return (
    <div className={s.planning} id="Планування">
      <Grid>
        <div className={s.frame}>
          <Rooms />
        </div>
      </Grid>
    </div>
  );
}
