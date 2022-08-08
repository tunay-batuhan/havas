import { useDispatch } from "react-redux";
import { setUserData } from "../store/api";
import { useRouter } from "next/router";
import { clearData } from "../store/api";
export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();

  const newRezervation = () => {
    dispatch(clearData());
    router.push("/");
  };
  return (
    <div className="header">
      <div className="banner">
        <span className="title">Otel</span>
        <span className="sub-title d-none d-sm-block">Rezervasyon Sistemi</span>
      </div>
      <div className="reservation">
        <button className="primary-button" onClick={newRezervation}>
          Yeni Rezervasyon Yap
        </button>
      </div>
    </div>
  );
}
