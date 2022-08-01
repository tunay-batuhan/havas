import Image from "next/image";
import calendar from "../public/calendar-green.png";

export default function receiptBanner() {
  return (
    <div className="receipt-banner padding-component bg-color-primary margin-component">
      <div className="banner-content">
        <Image src={calendar} />
        <p className="title">Rezervasyon kaydınız alınmıştır. </p>
        <p className="text">
          Rezervasyon özetiniz aşağıdaki gibidir. Rezervasyon kaydınızda
          değişiklik veya yeni rezervasyon yapmak için aşağıdaki linkleri
          kullanabilirsiniz.
        </p>
        <div className="btn-wrapper">
          <button className="secondary-button type-3">
            Yeni Rezervasyon Yap
          </button>
        </div>
      </div>
    </div>
  );
}
