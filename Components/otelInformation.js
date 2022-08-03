import { useEffect, useState } from "react";
import { dateFormat } from "./dateCalculation";

export default function otelInformation({ userFormData }) {
  return (
    <div className="otel-information padding-component bg-color-secondary">
      <div className="otel-name">
        <span className="text">{userFormData?.otelName}</span>
      </div>
      <div className="content-info">
        <div className="text-content">
          <span className="text">giriş tarihi:</span>
          <span className="text type-2">
            {dateFormat(userFormData?.startDate)}
          </span>
        </div>
        <div className="text-content">
          <span className="text">çıkış tarihi:</span>
          <span className="text type-2">
            {" "}
            {dateFormat(userFormData?.endDate)}
          </span>
        </div>
        <div className="text-content">
          <span className="text">yetişkin:</span>
          <span className="text type-2">{userFormData?.adult}</span>
        </div>
        <div className="text-content">
          <span className="text">çocuk:</span>
          <span className="text type-2">{userFormData?.child}</span>
        </div>
      </div>
    </div>
  );
}
