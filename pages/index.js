import StepBanner from "../Components/stepBanner";
import HotelSelection from "../Components/hotelSelection";
import ReservationChoice from "../Components/reservationChoice";
import Footer from "../Components/footer";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counterSlice";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [selectOtel, setSelectOtel] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();

  const MySwal = withReactContent(Swal);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("otelName", selectOtel.label);
    formData.append("otelId", selectOtel.id);
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);
    const data = Object.fromEntries(formData.entries());
    const controlData = Object.values(data);
    console.log(controlData);
    if (controlData.includes("") || controlData.includes("undefined")) {
      MySwal.fire({
        icon: "error",
        text: "Otel seçimi, çıkış tarihi ve yetişkin sayısı dolu olmalı",
      });
    } else {
      router.push("/stepSecond");
    }
    // const control = Object.values(data).map((item, index) => {
    //   if (item === "" || item === "undefined") {
    //
    //   } else {
    //     console.log(item);
    //     // router.push("/stepSecond");
    //   }
    // });
    console.log(data);
  };
  return (
    <div className="container Home">
      <form onSubmit={handleSubmit}>
        <StepBanner />
        <HotelSelection setSelectOtel={setSelectOtel} />
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
