import StepBanner from "../Components/stepBanner";
import OtelInformation from "../Components/otelInformation";
import OtelType from "../Components/otelType";
import Footer from "../Components/footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getOtelDetail } from "../Components/api";

export default function stepSecond() {
  const [userFormData, setUserFormData] = useState();
  const [otelDetails, setOtelDetails] = useState();
  const getOtelDetails = async () => {
    const url =
      "https://628e2457a339dfef87a85d4e.mockapi.io/havascx/hotel-details";
    const response = await axios(url);
    setOtelDetails(response.data);
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("stepOneData"));
    setUserFormData(data);
    getOtelDetail(setOtelDetails, data.otelId);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <StepBanner stepType="type-second"></StepBanner>
        <OtelInformation userFormData={userFormData}></OtelInformation>
        <OtelType
          roomScenic={otelDetails?.room_scenic}
          roomtype={otelDetails?.room_type}
        ></OtelType>
        <Footer />
      </form>
    </div>
  );
}
