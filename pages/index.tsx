import { ReactElement } from "react";
import AboutUs from "../components/AboutUs/aboutUs";
import Introduction from "../components/Introduction/introduction";
import Slider from "../components/Slider/slider";
import Location from "../components/Location/location";

import Header from "../components/Ui/Header/header";
import Planning from "../components/Planning/planning";
import FloorSlider from "../components/FloorSlider/floorSlider";
import ApartmentsColections from "../components/ApartmentsColections/apartmentsColections";
import Consultation from "../components/Consultation/consultation";
import Contacts from "../components/Contacts/contacts";
import CallMePopup from "../components/Ui/CallMePopup/callMePopup";
import CompletedPopup from "../components/Ui/CompletedPopup/completedPopup";

export default function Home(): ReactElement {
  return (
    <div>
      <Header />
      <Introduction />
      <AboutUs />
      <Slider />
      <Location />
      <Planning />
      <FloorSlider />
      <ApartmentsColections />
      <Consultation />
      <Contacts />
    </div>
  );
}
