import Receipt from "../Components/receipt";
import ReceiptBanner from "../Components/receiptBanner";
export default function stepEnd() {
  return (
    <>
      <ReceiptBanner></ReceiptBanner>
      <div className="container">
        <Receipt display={"d-none"}></Receipt>
      </div>
    </>
  );
}
