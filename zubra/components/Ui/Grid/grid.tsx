import { ReactElement } from "react";
import s from "./grid.module.css";

type Props = {
  children: ReactElement;
};
export default function Grid({ children }: Props) {
  return <div className={s.grid}>{children}</div>;
}
