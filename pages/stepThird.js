import StepBanner from "../Components/stepBanner";
import Receipt from "../Components/receipt";

export default function stepThird() {
  return (
    <div className="container">
      <StepBanner stepType="type-last"></StepBanner>
      <div className="row">
        <div className="col-12 col-lg-5 col-xxl-6">asd</div>
        <div className="col-12 col-lg-7 col-xxl-6">
          <Receipt></Receipt>
        </div>
      </div>
    </div>
  );
}
