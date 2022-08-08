import Select from "react-select";
import { useEffect, useState } from "react";
import { getOtelList } from "./api";
export default function hotelSelection({ userFormData, setUserFormData }) {
  const [otel, setOtel] = useState();
  const [delay, setDelay] = useState(false);
  useEffect(() => {
    getOtelList(setOtel);

    setTimeout(() => {
      setDelay(true);
    }, 100);
  }, []);
  const selected = {
    id: userFormData.otelId,
    label: userFormData.otelName,
  };
  const onChangeSelect = async (e) => {
    setUserFormData(e);
  };

  if (delay == true) {
    return (
      <div className="hotelSelection ">
        <Select
          defaultValue={selected.id ? selected : ""}
          placeholder="Rezervasyon yapmak istediğiniz oteli seçiniz."
          onChange={(e) => onChangeSelect(e)}
          options={otel}
          styles={customStyles}
        />
      </div>
    );
  }
}
const customStyles = {
  option: (base) => ({
    ...base,
    color: "#132f56",
    backgroundColor: "white",
  }),
};
