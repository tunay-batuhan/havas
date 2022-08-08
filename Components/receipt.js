import { getCouponCode } from "./api";

export default function receipt({
  display,
  fromData,
  totalCast,
  setcouponCode,
  setFromData,
  couponCode,
}) {
  const getCoupon = () => {
    let code = document.getElementById("couponCode").value.toUpperCase();
    getCouponCode(setcouponCode, code);
    setFromData({ ...fromData, coupon_code: couponCode });
  };
  return (
    <div className="receipt padding-component margin-component bg-color-secondary">
      <h2 className="title">{fromData.otelName}</h2>
      <div className="row">
        <div className="col-6">
          <div className="secondary-card">
            <p className="text">Griş Tarihi:</p>
            <p className="text sub-text">{fromData.startDate}</p>
          </div>
        </div>
        <div className="col-6">
          <div className="secondary-card">
            <p className="text">Griş Tarihi:</p>
            <p className="text sub-text">{fromData.endDate}</p>
          </div>
        </div>
        <div className="col-6">
          <div className="secondary-card">
            <p className="text">Yetişkin:</p>
            <p className="text sub-text">{fromData.adult}</p>
          </div>
        </div>
        <div className="col-6">
          <div className="secondary-card">
            <p className="text">Çocuk:</p>
            <p className="text sub-text">{fromData.child}</p>
          </div>
        </div>
        <div className="col-6">
          <div className="secondary-card">
            <p className="text">Oda Tipi:</p>
            <p className="text sub-text">{fromData.typeRoom}</p>
          </div>
        </div>
        <div className="col-6">
          <div className="secondary-card">
            <p className="text">Manzara:</p>
            <p className="text sub-text">{fromData.viewRoom}</p>
          </div>
        </div>
        <div className="col-12">
          <div className={`secondary-card ${display}`}>
            <div className="row">
              <div className="col-6">
                <input placeholder="kupon kodu" id="couponCode" />
              </div>
              <div className="col-6">
                <button
                  type="button"
                  className="secondary-button type-2"
                  onClick={getCoupon}
                >
                  Kodu Kullan
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="secondary-card type-2">
            <div className="top-content">
              <p className="text">Oda Fiyatı:</p>
              <p className="text sub-text">
                {fromData.roomtype / fromData.dayDifference} TL
              </p>
            </div>
            <div className="top-content">
              <p className="text">Fiyat Etki Oranı:</p>
              <p className="text sub-text">%{fromData.roomScenic}</p>
            </div>
            <div className="top-content">
              <p className="text">Konaklama ({fromData.dayDifference} Gün)</p>
              <p className="text sub-text">{fromData.roomtype} TL</p>
            </div>
            <div className="top-content">
              <p className="text">İndirim </p>
              <p className="text sub-text">{"-" + couponCode + "TL"}</p>
            </div>
            <div className="cost">
              <p className="text">Toplam tutar</p>
              <p className="text big-text">
                {totalCast - (couponCode || 0)} TL
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
