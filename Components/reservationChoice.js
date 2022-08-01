import DatePicker from "react-datepicker";
import { useState } from "react";
import Image from "next/image";
import calendarImage from "../public/calendar.png";
import deneme from "../pages/deneme";

export default function reservationChoice({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) {
  return (
    <div className="reservation-choice padding-component bg-color-secondary">
      <div className="date-picker-wrapper">
        <div className="date-picker">
          <p className="title mb-1 text-md-end">Giriş Tarihi</p>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            inline
            minDate={startDate}
          />
        </div>
        <div className="img-wrapper">
          <Image src={calendarImage} />
        </div>
        <div className="date-picker">
          <p className="title d-none d-md-block mb-1">Çıkış Tarihi</p>
          <DatePicker
            onChange={(date) => setEndDate(date)}
            inline
            minDate={startDate}
            width={100}
          />
          <p className="title mt-1 d-md-none">Çıkış Tarihi</p>
        </div>
      </div>
      <div className="imput-section">
        <div className="input">
          <span className="text">Yetişkin sayısı</span>
          <input maxLength="1" name="adult"></input>
        </div>
        <div className="input">
          <span className="text">Çocuk sayısı</span>
          <input maxLength="1" name="child" defaultValue="0"></input>
        </div>
      </div>
    </div>
  );
}
