import Select from "react-select";

export default function creditCard({ cardData, setCardData }) {
  function addDash(element) {
    let ele = element.target;
    ele = ele.value.split("-").join("");

    let finalVal = ele.match(/.{1,4}/g).join("-");
    element.target.value = finalVal;
  }
  return (
    <>
      <div className="credit-card margin-component bg-color-secondary">
        <div className="card-title">
          <p className="text">
            Credit<span className="sub-text">Card</span>
          </p>
          <p className="text">Bank</p>
        </div>
        <img className="card-img img-fluid"></img>
        <div className="card-number">
          <p className="credit-number">
            {cardData?.card_number || "1234-4321-1234-4321"}
          </p>
          <p className="pw">{cardData?.card_name || "**** ****"}</p>
          <p className="date">
            {cardData?.card_date_month || "**"}/
            {cardData?.card_date_year || "**"}
          </p>
        </div>
      </div>
      <div className="credit-form-section">
        <p className="title">Kredi Kartı Bilgileri</p>
        <div className="form-grup">
          <label>Kart Üstündeki İsim</label>
          <input
            type="text"
            name="card_name"
            placeholder="Kartın üzerindeki ismi giriniz."
            maxLength="25"
            onChange={(e) =>
              setCardData({ ...cardData, card_name: e.target.value })
            }
          ></input>
        </div>
        <div className="form-grup">
          <label>Kartın Numarası</label>
          <input
            id="23"
            type="tel"
            name="card_number"
            placeholder="Kart numarasını giriniz."
            maxLength="19"
            onChange={(e) => {
              setCardData({ ...cardData, card_number: e.target.value });
              addDash(e);
            }}
          ></input>
        </div>
        <div className="row">
          <label>Kart Son Kullanma Tarihi</label>
          <div className="col-4">
            <Select
              name="card_date_month"
              placeholder="Ay"
              styles={customStyles}
              options={month}
              onChange={(e) =>
                setCardData({ ...cardData, card_date_month: e.id })
              }
              instanceId="month"
            />
          </div>
          <div className="col-4">
            <Select
              name="card_date_year"
              placeholder="Yıl"
              styles={customStyles}
              options={year}
              onChange={(e) =>
                setCardData({ ...cardData, card_date_year: e.id })
              }
              instanceId="year"
            />
          </div>
          <div className="col-4">
            <input
              className="cvv"
              type="tel"
              maxLength="3"
              name="card_cvv"
              placeholder="CVV"
              onChange={(e) =>
                setCardData({ ...cardData, card_cvv: e.target.value })
              }
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}
const customStyles = {
  option: (base) => ({
    ...base,
    color: "#132f56",
    backgroundColor: "white",
  }),
};
const month = [
  { id: "01", label: "01" },
  { id: "02", label: "02" },
  { id: "03", label: "03" },
  { id: "04", label: "04" },
  { id: "05", label: "05" },
  { id: "06", label: "06" },
  { id: "07", label: "07" },
  { id: "08", label: "08" },
  { id: "09", label: "09" },
  { id: "10", label: "10" },
  { id: "11", label: "11" },
  { id: "12", label: "12" },
];
const year = [
  { id: "2022", label: "2022" },
  { id: "2023", label: "2023" },
  { id: "2024", label: "2024" },
  { id: "2025", label: "2025" },
  { id: "2026", label: "2026" },
  { id: "2027", label: "2027" },
];
