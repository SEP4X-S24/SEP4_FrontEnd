import "./Humidity.css";

function Humidity({ value }: { value: number }) {

  return (
    <div className="humidity container row m-0 d-flex">
      <div className="col-6 d-flex flex-column justify-content-center align-items-center">
        <h5>Humidity</h5>
        <h3>{value}%</h3>
      </div>
      <div className="col d-flex flex-column justify-content-center align-content-center align-items-center">
        <text className="humidity-marks">100</text>
        <div className="humidity-bar">
          <div className="humidity-bar-filled" style={{height: `${value}%`}}></div>
        </div>
        <text className="humidity-marks">0</text>
      </div>
    </div>
  );
}

export default Humidity;
