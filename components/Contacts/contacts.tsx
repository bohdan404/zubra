/* eslint-disable jsx-a11y/anchor-is-valid */
import Grid from "../Ui/Grid/grid";
import s from "./contacts.module.css";

export default function Contacts() {
  return (
    <div className={s.contacts}>
      <Grid>
        <div className={s.contactsWrap}>
          <p className={s.title}>Контакти</p>
          <div className={s.contactUs}>
            <div className={s.contact}>
              <p>Контактний номер</p>
              <a href="tel:380962690886">+380962690886</a>
            </div>
            <div className={s.contact}>
              <p>Електронна пошта</p>
              <a href="mailto:zubradimjk@gmail.com">zubradimjk@gmail.com</a>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
}
