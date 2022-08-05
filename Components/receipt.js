export default function receipt({ display, fromData }) {
  const totalCast =
    (Number(fromData.roomtype) * Number(fromData.roomScenic)) / 100 +
    Number(fromData.roomtype) * Number(fromData.adult);
  const accomodationCast =
    Number(fromData.roomtype) * Number(fromData.dayDifference);
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
                <input placeholder="kupon kodu" />
              </div>
              <div className="col-6">
                <button className="secondary-button type-2">Kodu Kullan</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="secondary-card type-2">
            <div className="top-content">
              <p className="text">Oda Fiyatı:</p>
              <p className="text sub-text">{fromData.roomtype} TL</p>
            </div>
            <div className="top-content">
              <p className="text">Fiyat Etki Oranı:</p>
              <p className="text sub-text">%{fromData.roomScenic}</p>
            </div>
            <div className="top-content">
              <p className="text">Konaklama ({fromData.dayDifference} Gün)</p>
              <p className="text sub-text">
                {fromData.roomtype != undefined ? accomodationCast : false}
              </p>
            </div>
            <div className="cost">
              <p className="text">Toplam tutar</p>
              <p className="text big-text"> {totalCast} TL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
