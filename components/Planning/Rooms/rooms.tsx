/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from "react";
import s from "./rooms.module.css";
import r1 from "../../../public/planing/r1.png";
import r2 from "../../../public/planing/r2.png";
import r3 from "../../../public/planing/r3.png";
import r4 from "../../../public/planing/r4.png";
import r5 from "../../../public/planing/r5.png";
import star from "../../../public/planing/star.svg";
import m from "../../../public/planing/m.svg";

export default function Rooms() {
  const [romType, setRomType] = useState("1 - кімнатна");
  const roms1 = [r1, r2, r3];
  const roms2 = [r4, r5];

  const renderRoms = (roms: string[]) => {
    return roms.map((rom) => {
      return <img src={rom} alt={rom} />;
    });
  };

  const renderRomsType = () => {
    switch (romType) {
      case "1 - кімнатна":
        return renderRoms(roms1);
      case "2 - кімнатна":
        return renderRoms(roms2);
      default:
        return null;
    }
  };
  const additionalInfo = (size: string, bonuses: string[]) => {
    return (
      <div className={s.additionalInfoWrap}>
        <div className={s.additionalInfo}>
          <img src={m} alt="m" />
          <p>{size}</p>
        </div>
        <div className={s.additionalInfo}>
          <img src={star} alt="star" />
          <div>
            {bonuses.map((bunusInfo) => {
              return <p>{bunusInfo}</p>;
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderAdditionalInfo = () => {
    switch (romType) {
      case "1 - кімнатна":
        return additionalInfo("44 - 46 м²", ["балкон"]);
      case "2 - кімнатна":
        return additionalInfo("63- 71 м²", ["балкон", "гардероб"]);
      default:
        return null;
    }
  };

  const Btn = ({ btnName }: { btnName: string }) => {
    return (
      <p
        style={
          romType === btnName ? { borderBottom: " 2px solid #DEDBCB" } : {}
        }
        onClick={() => setRomType(btnName)}
      >
        {btnName}
      </p>
    );
  };

  return (
    <div className={s.rooms}>
      <p className={s.title}>Планування</p>
      <div className={s.wrap}>
        <div className={s.list}>{renderRomsType()}</div>
        <div>
          <div className={s.choseRoms}>
            <Btn btnName="1 - кімнатна" />
            <hr />
            <Btn btnName="2 - кімнатна" />
          </div>
          {renderAdditionalInfo()}
        </div>
      </div>
    </div>
  );
}
