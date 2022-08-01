export default function otelInformation() {
  return (
    <div className="otel-information padding-component bg-color-secondary">
      <div className="otel-name">
        <span className="text">Bosborus Hotel</span>
        <span className="text type-2">(İstanbul)</span>
      </div>
      <div className="content-info">
        <div className="text-content">
          <span className="text">giriş tarihi:</span>
          <span className="text type-2">10.10.10</span>
        </div>
        <div className="text-content">
          <span className="text">çıkış tarihi:</span>
          <span className="text type-2">10.10.10</span>
        </div>
        <div className="text-content">
          <span className="text">yetişkin:</span>
          <span className="text type-2">2</span>
        </div>
        <div className="text-content">
          <span className="text">çocuk:</span>
          <span className="text type-2">0</span>
        </div>
      </div>
    </div>
  );
}
