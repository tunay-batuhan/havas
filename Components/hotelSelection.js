import Select from "react-select";
import { useEffect, useState } from "react";
import { getOtelList } from "./api";
export default function hotelSelection({ selectOtel, setSelectOtel }) {
  const [otel, setOtel] = useState();
  const [delay, setDelay] = useState(false);

  useEffect(() => {
    getOtelList(setOtel);
    const data = JSON.parse(localStorage.getItem("userFormData"));
    if (data != null) {
      setSelectOtel({ id: data.otelId, label: data.otelName });
    }
    setTimeout(() => {
      setDelay(true);
    }, 100);
  }, []);
  if (delay == true) {
    return (
      <div className="hotelSelection ">
        <Select
          defaultValue={selectOtel}
          placeholder="Rezervasyon yapmak istediğiniz oteli seçiniz."
          onChange={(e) => setSelectOtel(e)}
          options={otel}
        />
      </div>
    );
  }
}
