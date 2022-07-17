import { useState } from "react";
import s from "./floorSlider.module.css";
import floor3 from "../../public/floorSlider/floor-1.jpg";
import floor2 from "../../public/floorSlider/floor-3.jpg";
import floor1 from "../../public/floorSlider/floor-2.jpg";
import floor from "../../public/floorSlider/floor.jpg";
import Grid from "../Ui/Grid/grid";

export default function FloorSlider() {
  const floorAr = [floor, floor1, floor2, floor3];
  const [activeSlide, setActive] = useState(0);

  const renderTabs = () => {
    return floorAr.map((elem, i) => {
      return (
        <div
          style={i === activeSlide ? { border: "1px solid #DEDBCB" } : {}}
          onClick={() => setActive(i)}
          className={s.tab}
        >
          {i + 1}
        </div>
      );
    });
  };
  return (
    <div className={s.slider}>
      <Grid>
        <div className={s.floorSlider}>
          <img className={s.slide} src={floorAr[activeSlide]} alt="floor" />
        </div>
      </Grid>
      <div className={s.navTabs}>
        <div className={s.wrapTabs}>{renderTabs()}</div>
      </div>
    </div>
  );
}
