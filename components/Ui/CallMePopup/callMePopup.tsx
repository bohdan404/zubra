import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import LearnMore from "../LearnMore/learnMore";
import s from "./callMePopup.module.css";
import cancle from "../../../public/cancle.svg";
import CompletedPopup from "../CompletedPopup/completedPopup";

type Props = {
  close?: () => void;
};
export default function CallMePopup({ close }: Props) {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [completed, setCompleted] = useState(false);
  const action = () => {
    console.log("asd");
  };

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
          console.log(result);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      {!completed ? (
        <div className={s.callMePopup}>
          <div className={s.contentWrap}>
            <div className={s.header}>
              <div onClick={() => close && close()}>
                <img src={cancle} alt="cancle" />
              </div>
            </div>
            <div className={s.content}>
              <p className={s.title}>Замовити консультацію</p>
              <div className={s.inptWrap}>
                <form ref={form} onSubmit={sendEmail}>
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
              {/* <div className={s.btnWrap}>
            <LearnMore
            color="#3A332F"
            disable={disabled()}
            onClick={action}
            background="#DEDBCB"
            >
            замовити
            </LearnMore>
          </div> */}
            </div>
          </div>
        </div>
      ) : (
        <CompletedPopup close={close} />
      )}
    </div>
  );
}
