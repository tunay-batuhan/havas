import StepBanner from "../Components/stepBanner";
import Receipt from "../Components/receipt";
import Footer from "../Components/footer";
import CreditCard from "../Components/creditCard";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserData } from "../store/api";
import { postData } from "../Components/api";

import axios from "axios";
import { allowedStatusCodes } from "next/dist/lib/load-custom-routes";
export default function stepThird() {
  const userFormDataState = useSelector((state) => state.userData.userData);
  const [fromData, setFromData] = useState(userFormDataState);
  const [cardData, setCardData] = useState({});
  const [couponCode, setcouponCode] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);
  const totalCast =
    (Number(fromData.roomtype) * Number(fromData.roomScenic)) / 100 +
    Number(fromData.roomtype);

  useEffect(() => {
    if (Object.keys(userFormDataState).length == 0) {
      const data = JSON.parse(localStorage.getItem("userFormData"));
      if (data != null) {
        setFromData(data);
      }
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("card_date_month", cardData?.card_date_month);
    formData.append("card_date_year", cardData?.card_date_year);
    const data = Object.fromEntries(formData.entries());
    const controlData = Object.values(data);
    if (controlData.includes("") || controlData.includes("undefined")) {
      MySwal.fire({
        icon: "error",
        text: "Card Bilgilerini eksiksiz doldurun",
      });
    } else {
      dispatch(
        setUserData({
          ...fromData,
          coupon_code: couponCode,
          totalCast: totalCast,
        })
      );
      postData(data, fromData, totalCast);
      router.push("step3");
    }
  };
  return (
    <div className="container">
      <StepBanner stepType="type-last"></StepBanner>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-lg-5 col-xxl-6">
            <CreditCard
              cardData={cardData}
              setCardData={setCardData}
            ></CreditCard>
          </div>
          <div className="col-12 col-lg-7 col-xxl-6">
            <Receipt
              fromData={fromData}
              totalCast={totalCast}
              setcouponCode={setcouponCode}
              setFromData={setFromData}
              couponCode={couponCode}
            ></Receipt>
          </div>
        </div>
        <Footer />
      </form>
    </div>
  );
}
