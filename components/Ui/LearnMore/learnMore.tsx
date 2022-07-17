/* eslint-disable react/button-has-type */

import s from "./learnMore.module.css";

type Props = {
  background?: string;
  color?: string;
  disable?: boolean;
  onClick?: () => void;
  children: string;
};
export default function LearnMore({
  background,
  onClick,
  color,
  disable = false,
  children,
}: Props) {
  return (
    <div className={s.learnMore}>
      <button
        disabled={disable}
        onClick={() => onClick && onClick()}
        style={{ background, color }}
        className={s.btn}
      >
        {children}
      </button>
    </div>
  );
}
