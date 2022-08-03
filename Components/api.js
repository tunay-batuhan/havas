import axios from "axios";

const getOtelList = async (setOtel) => {
  const url = "https://628e2457a339dfef87a85d4e.mockapi.io/havascx/hotels";
  const response = await axios(url);
  const otelList = response.data.map((item) => {
    return { id: item.id, label: item.hotel_name };
  });
  setOtel(otelList);
};

const getOtelDetail = async (setOtelDetails, otelId) => {
  const url =
    "https://628e2457a339dfef87a85d4e.mockapi.io/havascx/hotel-details";
  const response = await axios(url);
  const data = response.data.filter((item) => {
    return item.id == otelId;
  });

  setOtelDetails(data[0]);
};
export { getOtelList, getOtelDetail };
