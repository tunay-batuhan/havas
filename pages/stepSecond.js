import React from "react";
import StepBanner from "../Components/stepBanner";
import OtelInformation from "../Components/otelInformation";
import OtelType from "../Components/otelType";
export default function stepSecond() {
  return (
    <div className="container">
      <StepBanner stepType="type-second"></StepBanner>
      <OtelInformation></OtelInformation>
      <OtelType></OtelType>
    </div>
  );
}
