import "./Humidity.css";

function Humidity({ value }: { value: number }) {
  return (
    <div className="humidity container row m-0 d-flex">
      <div className="col-6 d-flex flex-column justify-content-center align-items-center p-0">
        <h4>Humidity</h4>
        <h5>{value}%</h5>
      </div>
      <div className="col d-flex flex-column justify-content-center align-content-center align-items-center p-0">
        <label className="humidity-marks">100</label>
        <div className="humidity-bar">
          <div
            className="humidity-bar-filled"
            style={{ height: `${value}%` }}
          ></div>
        </div>
        <label className="humidity-marks">0</label>
      </div>
    </div>
  );
}

export default Humidity;
