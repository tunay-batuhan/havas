import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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
const getCouponCode = async (setcouponCode, code) => {
  const url = `https://628e2457a339dfef87a85d4e.mockapi.io/havascx/coupons?code=${code}`;
  const response = await axios(url);
  const MySwal = withReactContent(Swal);
  const result = response.data.filter((item) => {
    return item.code == code;
  });
  if (result.length !== 0) {
    setcouponCode(result[0].discount_ammount);
    MySwal.fire({
      position: "center",
      icon: "success",
      title: "Kupon kodu uygulandı",
      showConfirmButton: false,
      timer: 1000,
    });
  } else {
    MySwal.fire({
      icon: "error",
      text: "Hatalı kupon kodu",
    });
  }
};

const postData = async (data, fromData, totalCast) => {
  const userformData = {
    start_date: fromData.startDate,
    end_date: fromData.endDate,
    adult: fromData.adult,
    child: fromData.child,
    room_type: fromData.typeRoom,
    room_scenic: fromData.viewRoom,
    price: totalCast,
    coupon_code: fromData.coupon_code,
    hotel_id: fromData.otelId,
    id: fromData.id,
  };
  const postData = { ...data, ...userformData };
  const url =
    "https://628e2457a339dfef87a85d4e.mockapi.io/havascx/hotel-bookings/";
  axios
    .post(url, postData)
    .then((data) => {
      console.log(data.status);
      if (data.status === 201) {
        return true;
      }
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};
export { getOtelList, getOtelDetail, getCouponCode, postData };
