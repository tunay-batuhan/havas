import StepBanner from "../Components/stepBanner";
import HotelSelection from "../Components/hotelSelection";
import ReservationChoice from "../Components/reservationChoice";
import Footer from "../Components/footer";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useSelector, useDispatch } from "react-redux";
import { setUserData } from "../store/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const userFormDataState = useSelector((state) => state.userData.userData);
  const [userFormData, setUserFormData] = useState(userFormDataState);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const MySwal = withReactContent(Swal);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append(
      "otelName",
      userFormData.label ? userFormData.label : userFormData.otelName
    );
    formData.append(
      "otelId",
      userFormData.id ? userFormData.id : userFormData.otelId
    );
    formData.append("startDate", startDate.toJSON().slice(0, 10));
    formData.append("endDate", endDate.toJSON().slice(0, 10));
    const data = Object.fromEntries(formData.entries());
    const controlData = Object.values(data);
    if (
      controlData.includes("") ||
      controlData.includes("undefined") ||
      startDate.toJSON() === endDate.toJSON()
    ) {
      MySwal.fire({
        icon: "error",
        text: "Otel seçimi, çıkış tarihi ve yetişkin sayısı dolu olmalı",
      });
    } else {
      dispatch(setUserData(data));
      router.push("step1");
    }
  };

  useEffect(() => {
    // if redux state is empty get local strage data
    if (Object.keys(userFormDataState).length == 0) {
      const data = JSON.parse(localStorage.getItem("userFormData"));
      if (data != null) {
        setUserFormData(data);
      }
    }
  }, []);
  return (
    <div className="container Home">
      <form onSubmit={handleSubmit}>
        <StepBanner />
        <HotelSelection
          userFormData={userFormData}
          setUserFormData={setUserFormData}
        />
        <ReservationChoice
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          userFormData={userFormData}
        />
        <Footer display={"d-none"} />
      </form>
    </div>
  );
}
