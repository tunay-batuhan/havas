import { useRouter } from "next/router";
import Image from "next/image";
import backButton from "../public/back-button.png";
export default function footer({ display }) {
  const router = useRouter();
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content padding-component bg-color-secondary mb-4">
          <div>
            <a className={`step ${display}`} onClick={() => router.back()}>
              <Image src={backButton} />
            </a>
          </div>

          <button className="secondary-button">Kaydet ve devam et</button>
        </div>
      </div>
    </div>
  );
}
