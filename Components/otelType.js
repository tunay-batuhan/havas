import Image from "next/image";
import { useState } from "react";
export default function otelType({ roomScenic, roomtype }) {
  const [fromData, setFromData] = useState([]);
  console.log(roomtype);

  return (
    <div className="otel-type">
      <p className="title">Oda Tipi Seçimi</p>
      <div className="card-section">
        {roomtype !== undefined
          ? roomtype.map((item, index) => {
              return (
                <label>
                  <input
                    className="card-input-element"
                    type="radio"
                    value={item.price}
                    name="roomtype"
                    defaultChecked={index === 0}
                  />
                  <div className="primary-card">
                    <p className="card-title">{item.title}</p>
                    <img
                      src={item.photo}
                      className="img-fluid card-img"
                    ></img>
                    <div className="card-content">
                      <div className="info-rev">
                        <span className="text">5 gün</span>
                        <span className="text">1 yetişkin</span>
                      </div>
                      <div className="price">
                        <span className="text-price">{item.price} TL</span>
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
        <div className="primary-card">
          <p className="card-title">asdasd</p>
          <img
            src="https://via.placeholder.com/400x200"
            className="img-fluid card-img"
          ></img>
          <div className="card-content">
            <div className="info-rev">
              <span className="text">5 gün</span>
              <span className="text">1 yetişkin</span>
            </div>
            <div className="price">
              <span className="text-price">5.600 TL</span>
            </div>
          </div>
        </div>
        <div className="primary-card">
          <p className="card-title">asdasd</p>
          <img
            src="https://via.placeholder.com/400x200"
            className="img-fluid card-img"
          ></img>
          <div className="card-content">
            <div className="info-rev">
              <span className="text">5 gün</span>
              <span className="text">1 yetişkin</span>
            </div>
            <div className="price">
              <span className="text-price">5.600 TL</span>
            </div>
          </div>
        </div>
        <div className="primary-card">
          <p className="card-title">asdasd</p>
          <img
            src="https://via.placeholder.com/400x200"
            className="img-fluid card-img"
          ></img>
          <div className="card-content">
            <div className="info-rev">
              <span className="text">5 gün</span>
              <span className="text">1 yetişkin</span>
            </div>
            <div className="price">
              <span className="text-price">5.600 TL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
