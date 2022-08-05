import { useState, useEffect } from "react";
import Image from "next/image";
import { beetwenTwoDate } from "./dateCalculation";
export default function otelType({ roomScenic, roomtype, adult, date }) {
  const [fromData, setFromData] = useState([]);
  const day = beetwenTwoDate(date[0], date[1]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userFormData"));
    setFromData(data);
  }, []);
  return (
    <>
      <div className="otel-type">
        <p className="title">Oda Tipi Seçimi</p>
        <div className="card-section">
          {roomtype !== undefined
            ? roomtype.map((item, index) => {
                return (
                  <label key={index} id="first">
                    <input
                      className="card-input-element"
                      type="radio"
                      value={item.price * adult * day}
                      name="roomtype"
                      title={item.title}
                      defaultChecked={
                        item.price * adult * day == fromData.roomtype
                          ? true
                          : index == 0
                      }
                    />
                    {console.log(
                      fromData.roomtype,
                      "burası",
                      item.price * adult * day
                    )}
                    <div className="primary-card">
                      <p className="card-title">{item.title}</p>
                      <Image
                        alt=""
                        src={item.photo}
                        width={300}
                        height={170}
                        className="img-fluid card-img"
                        loading="lazy"
                      />
                      <div className="card-content">
                        <div className="info-rev">
                          <span className="text">{day} gün</span>
                          <span className="text">{adult} yetişkin</span>
                        </div>
                        <div className="price">
                          <span className="text-price">
                            {item.price * adult * day} TL
                            {console.log(day)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </label>
                );
              })
            : "yükleniyor"}
        </div>
        <p className="title">Oda Tipi Seçimi</p>
        <div className="card-section">
          {roomScenic !== undefined
            ? roomScenic.map((item, index) => {
                return (
                  <label key={index} id="second">
                    <input
                      className="card-input-element"
                      type="radio"
                      value={item.price_rate}
                      name="roomScenic"
                      title={item.title}
                      defaultChecked={
                        fromData.roomScenic
                          ? item.price_rate == fromData.roomScenic
                          : index == 0
                      }
                    />
                    <div className="primary-card">
                      <p className="card-title">{item.title}</p>
                      <Image
                        alt=""
                        src={item.photo}
                        width={300}
                        height={170}
                        className="img-fluid card-img"
                        loading="lazy"
                      />
                      <div className="card-content">
                        <div className="info-rev">
                          <span className="text">5 gün</span>
                          <span className="text">1 yetişkin</span>
                        </div>
                        <div className="price">
                          <span className="text-price">
                            + {item.price_rate}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </label>
                );
              })
            : "yükleniyor"}
        </div>
      </div>
    </>
  );
}
