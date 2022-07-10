import { useState } from "react";
import s from "./apartmentsColections.module.css";
import apartment1 from "../../public/apartments/a1.svg";
import apartment2 from "../../public/apartments/a2.svg";
import apartment3 from "../../public/apartments/a3.svg";
import apartment4 from "../../public/apartments/a4.svg";
import Grid from "../Ui/Grid/grid";
import LearnMore from "../Ui/LearnMore/learnMore";
import CallMePopup from "../Ui/CallMePopup/callMePopup";

export default function ApartmentsColections() {
  const apartments = [
    {
      img: apartment1,
      text: "Індивідуальні лічильники ",
    },
    {
      img: apartment2,
      text: "Броньовані вхідні двері",
    },
    {
      img: apartment3,
      text: "Газовий котел",
    },
    {
      img: apartment4,
      text: "Метало-пластикові вікна",
    },
  ];
  const [open, setOpen] = useState(false);

  const renderApartments = () => {
    return apartments.map((apartment) => {
      return (
        <div className={s.apartment}>
          <img src={apartment.img} alt={apartment.text} />
          <p>{apartment.text}</p>
        </div>
      );
    });
  };

  return (
    <div className={s.apartmentsColections} id="Комплектація">
      <Grid>
        <div className={s.wrap}>
          <p className={s.title}>Комплектація квартири</p>
          <div className={s.apartments}>{renderApartments()}</div>
          <div className={s.btn}>
            <LearnMore
              onClick={() => setOpen(true)}
              background="#DEDBCB"
              color=" #3A332F"
            >
              обрати квартиру
            </LearnMore>
          </div>
        </div>
      </Grid>
      {open && <CallMePopup close={() => setOpen(false)} />}
    </div>
  );
}
