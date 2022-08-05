export default function creditCard() {
  return (
    <>
      <div className="credit-card margin-component bg-color-secondary">
        <div className="card-title">
          <p className="text">
            Credit<span class="sub-text">Card</span>
          </p>
          <p className="text">Bank</p>
        </div>
        <img className="card-img img-fluid"></img>
        <div className="card-number">
          <p className="credit-number">1234 4321 1234 4321</p>
          <p className="pw">**** ****</p>
          <p className="date">05/30</p>
        </div>
      </div>
      <div className="credit-form-section">
        <p className="title">Kredi Kartı Bilgileri</p>
        <div className="form-grup">
          <label>Kart Üstündeki İsim</label>
          <input
            name="creditName"
            placeholder="Kartın üzerindeki ismi giriniz."
          ></input>
        </div>
        <div className="form-grup">
          <label>Kartın Numarası</label>
          <input
            name="creditNumber"
            placeholder="Kart numarasını giriniz."
          ></input>
        </div>
        <div className="row">
          <label>Kartın Numarası</label>
          <div className="col-4">
            <select name="creditMonth" placeholder="Ay">
              <option>a</option>
              <option>a</option>
              <option>a</option>
            </select>
          </div>
          <div className="col-4">
            <select name="creditYear" placeholder="Yıl"></select>
          </div>
          <div className="col-4">
            <select name="creditCvv" placeholder="CVV"></select>
          </div>
        </div>
      </div>
    </>
  );
}
