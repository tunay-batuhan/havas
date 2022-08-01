export default function receipt({ display }) {
  return (
    <div className="receipt padding-component margin-component bg-color-secondary">
      <h2 className="title">
        Bosphorus Hotel <span className="text">(İstanbul)</span>
      </h2>
      <div className="row">
        <div className="col-6">
          <div className="secondary-card">
            <p className="text">Griş Tarihi:</p>
            <p className="text sub-text">Deniz Manzaralı</p>
          </div>
        </div>
        <div className="col-6">
          <div className="secondary-card">
            <p className="text">Griş Tarihi:</p>
            <p className="text sub-text">Deniz Manzaralı</p>
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
              <p className="text">Griş Tarihi:</p>
              <p className="text sub-text">Deniz Manzaralı</p>
            </div>
            <div className="top-content">
              <p className="text">Griş Tarihi:</p>
              <p className="text sub-text">Deniz Manzaralı</p>
            </div>
            <div className="cost">
              <p className="text">Toplam tutar</p>
              <p className="text big-text"> 5.123 TL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
