import StepBanner from "../Components/stepBanner";
import HotelSelection from "../Components/hotelSelection";
import ReservationChoice from "../Components/reservationChoice";
import Footer from "../Components/footer";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch } from "react-redux";
import { setLocalStroge, userFormData } from "../store/api";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [selectOtel, setSelectOtel] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();

  const MySwal = withReactContent(Swal);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("otelName", selectOtel.label);
    formData.append("otelId", selectOtel.id);
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);
    const data = Object.fromEntries(formData.entries());
    const controlData = Object.values(data);
    if (controlData.includes("") || controlData.includes("undefined")) {
      MySwal.fire({
        icon: "error",
        text: "Otel seçimi, çıkış tarihi ve yetişkin sayısı dolu olmalı",
      });
    } else {
      dispatch(setLocalStroge([data, "stepOneData"]));
      router.push("stepSecond");
    }
  };

  return (
    <div className="container Home">
      <form onSubmit={handleSubmit}>
        <StepBanner />
        <HotelSelection selectOtel={selectOtel} setSelectOtel={setSelectOtel} />
        <ReservationChoice
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <Footer />
      </form>
    </div>
  );
}
