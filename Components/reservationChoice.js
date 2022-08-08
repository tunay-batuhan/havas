import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import Image from "next/image";
import calendarImage from "../public/calendar.png";

export default function reservationChoice({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  userFormData,
}) {
  return (
    <div className="reservation-choice padding-component bg-color-secondary">
      <div className="date-picker-wrapper">
        <div className="date-picker">
          <p className="title mb-1 text-md-end">Giriş Tarihi</p>
          <DatePicker
            value={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={startDate}
            selectsStart
            inline
          />
        </div>
        <div className="img-wrapper">
          <Image src={calendarImage} />
        </div>
        <div className="date-picker">
          <p className="title d-none d-md-block mb-1">Çıkış Tarihi</p>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            minDate={startDate}
            selectsEnd
            inline
          />
        </div>
      </div>
      <div className="imput-section">
        <div className="input">
          <span className="text">Yetişkin sayısı</span>
          <input
            maxLength="1"
            name="adult"
            defaultValue={userFormData.adult ? userFormData.adult : 1}
            type="number"
            min="1"
            max="5"
          ></input>
        </div>
        <div className="input">
          <span className="text">Çocuk sayısı</span>
          <input
            maxLength="1"
            name="child"
            defaultValue={userFormData.child ? userFormData.child : 0}
            type="number"
            min="0"
            max="5"
          ></input>
        </div>
      </div>
    </div>
  );
}
