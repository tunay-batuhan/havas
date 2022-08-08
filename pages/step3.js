import Receipt from "../Components/receipt";
import ReceiptBanner from "../Components/receiptBanner";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function stepEnd() {
  const [fromData, setFromData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userFormData"));
    setFromData(data);
  }, []);
  return (
    <>
      <ReceiptBanner></ReceiptBanner>
      <div className="container">
        <Receipt
          display={"d-none"}
          fromData={fromData}
          couponCode={fromData.coupon_code}
          totalCast={fromData.totalCast}
        ></Receipt>
      </div>
    </>
  );
}
