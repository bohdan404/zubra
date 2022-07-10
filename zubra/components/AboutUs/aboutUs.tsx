import Grid from "../Ui/Grid/grid";
import s from "./aboutUs.module.css";
import construction from "../../public/construction.svg";
import flat from "../../public/flat.svg";
import floor from "../../public/floor.svg";
import heating from "../../public/heating.svg";
import height from "../../public/height.svg";
import materials from "../../public/materials.svg";
import sections from "../../public/sections.svg";
import warming from "../../public/warming.svg";
import clas from "../../public/class.svg";

export default function AboutUs() {
  const aboutInfo = [
    {
      img: flat,
      text: "102 квартири",
    },
    {
      img: materials,
      text: "виготовлений з цегли",
    },
    {
      img: heating,
      text: "індивідуальне опалення",
    },
    {
      img: floor,
      text: "4 поверхи",
    },
    {
      img: height,
      text: "висота стель 2.7 м",
    },
    {
      img: warming,
      text: "утеплений пінополістеролом",
    },
    {
      img: sections,
      text: "6 секцій",
    },
    {
      img: construction,
      text: " монолітно-каркасна конструкція",
    },
    {
      img: clas,
      text: "комфорт клас",
    },
  ];

  const renderIcon = () => {
    return aboutInfo.map((icon) => {
      return (
        <div key={icon.text} className={s.item}>
          <img src={icon.img} alt={icon.text} />
          <p>{icon.text}</p>
        </div>
      );
    });
  };

  return (
    <div className={s.aboutUs} id="Про проект">
      <Grid>
        <div className={s.projects}>
          <div className={s.wrap}>{renderIcon()}</div>
        </div>
      </Grid>
    </div>
  );
}
