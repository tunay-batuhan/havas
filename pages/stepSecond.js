import StepBanner from "../Components/stepBanner";
import OtelInformation from "../Components/otelInformation";
import OtelType from "../Components/otelType";
import Footer from "../Components/footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setLocalStroge } from "../store/api";
import { getOtelDetail } from "../Components/api";
import { beetwenTwoDate } from "../Components/dateCalculation";

export default function stepSecond() {
  const [userFormData, setUserFormData] = useState();
  const [otelDetails, setOtelDetails] = useState();
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userFormData"));
    setUserFormData(data);
    getOtelDetail(setOtelDetails, data.otelId);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const day = beetwenTwoDate(userFormData?.startDate, userFormData?.endDate);
    let typeRoom = document.querySelector("#first input:checked").title;
    let viewRoom = document.querySelector("#second input:checked").title;
    const formData = new FormData(e.currentTarget);
    formData.append("typeRoom", typeRoom);
    formData.append("viewRoom", viewRoom);
    formData.append("dayDifference", day);
    const data = Object.fromEntries(formData.entries());

    dispatch(setLocalStroge(data));
    console.log(userFormData);
    router.push("stepThird");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <StepBanner stepType="type-second"></StepBanner>
        <OtelInformation userFormData={userFormData}></OtelInformation>
        <OtelType
          roomScenic={otelDetails?.room_scenic}
          roomtype={otelDetails?.room_type}
          adult={userFormData?.adult}
          date={[userFormData?.startDate, userFormData?.endDate]}
        ></OtelType>
        <Footer />
      </form>
    </div>
  );
}
