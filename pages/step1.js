import StepBanner from "../Components/stepBanner";
import OtelInformation from "../Components/otelInformation";
import OtelType from "../Components/otelType";
import Footer from "../Components/footer";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { setUserData } from "../store/api";
import { getOtelDetail } from "../Components/api";
import { beetwenTwoDate } from "../Components/dateCalculation";

export default function stepSecond() {
  const userFormDataState = useSelector((state) => state.userData.userData);
  const dispatch = useDispatch();
  const router = useRouter();

  const [userFormData, setUserFormData] = useState(userFormDataState);
  const [otelDetails, setOtelDetails] = useState(userFormDataState);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userFormData"));
    if (Object.keys(userFormDataState).length == 0) {
      if (data != null) {
        setUserFormData(data);
      }
    }
    // if redux state is empty get local strage data
    const otelId = userFormData.otelId ? userFormData.otelId : data.otelId;
    getOtelDetail(setOtelDetails, otelId);
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

    dispatch(setUserData({ ...userFormData, ...data }));
    router.push("step2");
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
