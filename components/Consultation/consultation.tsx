import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import s from "./consultation.module.css";
import consultation from "../../public/consultation.jpg";
import Grid from "../Ui/Grid/grid";
import CompletedPopup from "../Ui/CompletedPopup/completedPopup";

export default function Consultation() {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [completed, setCompleted] = useState(false);

  const disabled = () => {
    if (!name || !tel) return true;
    return false;
  };

  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_65foirf",
        "template_dopg00s",
        form.current as any,
        "E8bUL47lVmNCAGD15"
      )
      .then(
        (result: any) => {
          setCompleted(true);
          setName("");
          setTel("");
          console.log(result);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };

  const close = () => {
    setCompleted(false);
  };

  return (
    <div className={s.consultation} id="Контакти">
      <Grid>
        <div className={s.wrap}>
          <img src={consultation} className={s.image} alt="consultation" />
          <div className={s.rigthColum}>
            <div className={s.callMeWrap}>
              <p className={s.title}>Замовити консультацію</p>
              <div className={s.inptWrap}>
                <form className={s.content} ref={form} onSubmit={sendEmail}>
                  <input
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ім’я"
                    type="text"
                  />
                  <input
                    name="message"
                    onChange={(e) => setTel(e.target.value)}
                    placeholder="Номер телефону"
                    type="text"
                  />
                  <div className={s.btnWrap}>
                    <input
                      disabled={disabled()}
                      className={s.submit}
                      type="submit"
                      value="замовити"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Grid>
      {completed && <CompletedPopup close={close} />}
    </div>
  );
}
