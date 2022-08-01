import Select from "react-select";
import { useState } from "react";
import axios from "axios";
export default function hotelSelection({ setSelectOtel }) {
  const [otel, setOtel] = useState();

  const getOtelList = async () => {
    const url = "https://628e2457a339dfef87a85d4e.mockapi.io/havascx/hotels";
    const response = await axios(url);

    const otelList = response.data.map((item) => {
      return { id: item.id, label: item.hotel_name };
    });

    setOtel(otelList);
  };
  useState(() => {
    getOtelList();
  }, []);

  return (
    <div className="hotelSelection ">
      <Select
        options={otel}
        instanceId="long-value-select"
        placeholder="Rezervasyon yapmak istediğiniz oteli seçiniz."
        onChange={(e) => setSelectOtel(e)}
      />
    </div>
  );
}
