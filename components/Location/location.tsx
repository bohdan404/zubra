/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
import { useState } from "react";
import CallMePopup from "../Ui/CallMePopup/callMePopup";
import Grid from "../Ui/Grid/grid";
import LearnMore from "../Ui/LearnMore/learnMore";
import s from "./location.module.css";

export default function Location() {
  const [open, setOpen] = useState(false);
  return (
    <div className={s.location} id="Локація">
      <Grid>
        <div className={s.locations}>
          <p className={s.titleM}>Локація</p>

          <div className={s.content}>
            <p className={s.title}>Локація</p>
            <p className={s.mainText}>
              ЖК “Зубра Дім” розташований поблизу Сихівського району Львова у
              населеному пункті Зубра. Поблизу ЖК “Зубра Дім” знаходиться
              Сихівський ліс та декілька парків, а також через Зубру протікає
              однойменна річка. Для вашої зручності неподалік від житлового
              комплексу також є продуктові та продовольчі магазини, а також
              школи, ліцеї та інші інфраструктурні об’єкти. Район оснащений
              хорошою транспортною сіткою, яка дозволяє швидко дістатись до
              будь-якої точки міста.
            </p>
            <div className={s.btnWrap}>
              <LearnMore
                onClick={() => setOpen(true)}
                background="#DEDBCB"
                color=" #3A332F"
              >
                дізнатись більше
              </LearnMore>
            </div>
          </div>
          <div className={s.descWrap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2576.4230637838054!2d24.050554800000004!3d49.778108599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae861a1380fb7%3A0x71d7a496d7094f93!2z0LLRg9C7LiDQktCw0YHQuNC70Y8g0KHRgtGD0YHQsCwg0JfRg9Cx0YDQsCwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGM!5e0!3m2!1suk!2sua!4v1656518870437!5m2!1suk!2sua"
              width="615px"
              height="652px"
              loading="lazy"
            />
          </div>
          <div className={s.mobileMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2576.4230637838054!2d24.050554800000004!3d49.778108599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae861a1380fb7%3A0x71d7a496d7094f93!2z0LLRg9C7LiDQktCw0YHQuNC70Y8g0KHRgtGD0YHQsCwg0JfRg9Cx0YDQsCwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGM!5e0!3m2!1suk!2sua!4v1656518870437!5m2!1suk!2sua"
              width="321px"
              height="340px"
              loading="lazy"
            />
          </div>
        </div>
      </Grid>
      {open && <CallMePopup close={() => setOpen(false)} />}
    </div>
  );
}
