import StepBanner from "../Components/stepBanner";
import Receipt from "../Components/receipt";
import Footer from "../Components/footer";
import CreditCard from "../Components/creditCard";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function stepThird() {
  const [fromData, setFromData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userFormData"));
    setFromData(data);
  }, []);

  return (
    <div className="container">
      <StepBanner stepType="type-last"></StepBanner>
      <div className="row">
        <div className="col-12 col-lg-5 col-xxl-6">
          <CreditCard></CreditCard>
        </div>
        <div className="col-12 col-lg-7 col-xxl-6">
          <Receipt fromData={fromData}></Receipt>
        </div>
      </div>
      <button onClick={() => router.push("stepEnd")}>silinecek</button>
      <Footer />
    </div>
  );
}
