export default function Header() {
  return (
    <div className="header">
      <div className="banner">
        <span className="title">Otel</span>
        <span className="sub-title d-none d-sm-block">Rezervasyon Sistemi</span>
      </div>
      <div className="reservation">
        <button className="primary-button">Yeni Rezervasyon Yap</button>
      </div>
    </div>
  );
}
