import React, { useState } from "react";
import Image from "next/image";
import step1 from "../public/step-1.png";
import step2 from "../public/step-2.png";
import step3 from "../public/step-3.png";
import step2Active from "../public/step-2-active.png";
import step3Active from "../public/step-3-active.png";

export default function stepBanner({ stepType }) {
  return (
    <div
      className={`step-banner padding-component bg-color-primary ${stepType}`}
    >
      <div className="image-wrapper">
        <div className="step-image">
          <Image src={step1} />
        </div>
        <span className="text">Otel ve Tarih Seçimi</span>
      </div>
      <div className="image-wrapper">
        <div className="step-image">
          <Image src={stepType ? step2Active : step2} />
        </div>
        <span className="text">Oda Tipi ve Manzara Seçimi</span>
      </div>
      <div className="image-wrapper">
        <div className="step-image">
          <Image src={stepType == "type-last" ? step3Active : step3} />
        </div>
        <span className="text">Önizleme ve Ödeme İşlemleri</span>
      </div>
    </div>
  );
}
