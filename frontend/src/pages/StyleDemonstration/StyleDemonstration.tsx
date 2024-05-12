import weatherIconMapper from "../../utils/WeatherIconMapper";
import "./StyleDemonstration.css";

function StyleDemonstration() {
  const iconsShowcase = Array.from(weatherIconMapper.entries())
    .filter((k) => typeof k === "string")
    .map(([weatherState, Icon]) => (
      <div
        className="col-3 d-flex justify-content-between align-items-center px-5 mx-5"
        key={weatherState}
      >
        <h3>{weatherState}:</h3>
        <Icon.Icon size={100} />
      </div>
    ));

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <label className="style-demonstration-headers">Font size</label>
      <h1 className="mb-3">Heading 1</h1>
      <h2 className="mb-3">Heading 2</h2>
      <h3 className="mb-3">Heading 3</h3>
      <h4 className="mb-3">Heading 4</h4>
      <h5 className="mb-3">Heading 5</h5>
      <h6 className="mb-3">Heading 6 (not used)</h6>

      <label className="style-demonstration-headers">Colors</label>
      <div id="colors" className="d-flex align-items-center flex-column">
        <h3>Primary</h3>
        <div className="color-box primary">
          <label style={{ color: "white" }}>Text</label>
          <label style={{ color: "black" }}>Text</label>
        </div>
        <h3>Primary dark</h3>
        <div className="color-box primary-dark">
          <label style={{ color: "white" }}>Text</label>
          <label style={{ color: "black" }}>Text</label>
        </div>
        <h3>Secondary</h3>
        <div className="color-box secondary">
          <label style={{ color: "white" }}>Text</label>
          <label style={{ color: "black" }}>Text</label>
        </div>
        <h3>Tertiary</h3>
        <div className="color-box tertiary">
          <label style={{ color: "white" }}>Text</label>
          <label style={{ color: "black" }}>Text</label>
        </div>
      </div>

      <div id="spacing" className="d-flex flex-column align-items-center">
        <label className="style-demonstration-headers">Spacing</label>
        <h3>
          Spacing <b>x-small</b>
        </h3>
        <div className="style-demonstration-spacing x-small">
          <div className="style-demonstration-box"></div>
          <div className="space-el"></div>
          <div className="style-demonstration-box"></div>
        </div>

        <h3>
          Spacing <b>small</b>
        </h3>
        <div className="style-demonstration-spacing small">
          <div className="style-demonstration-box"></div>
          <div className="space-el"></div>
          <div className="style-demonstration-box"></div>
        </div>

        <h3>
          Spacing <b>normal</b>
        </h3>
        <div className="style-demonstration-spacing normal">
          <div className="style-demonstration-box"></div>
          <div className="space-el"></div>
          <div className="style-demonstration-box"></div>
        </div>

        <h3>
          Spacing <b>big</b>
        </h3>
        <div className="style-demonstration-spacing big">
          <div className="style-demonstration-box"></div>
          <div className="space-el"></div>
          <div className="style-demonstration-box"></div>
        </div>

        <h3>
          Spacing <b>large</b>
        </h3>
        <div className="style-demonstration-spacing large">
          <div className="style-demonstration-box"></div>
          <div className="space-el"></div>
          <div className="style-demonstration-box"></div>
        </div>
      </div>

      <div id="round-corners" className="d-flex flex-column align-items-center">
        <label className="style-demonstration-headers">Rounded corners</label>
        <h3>
          Round corner <b>xx-small</b>
        </h3>
        <div className="style-demonstration-round-corners-xx-small">
          <div className="style-demonstration-box"></div>
        </div>

        <h3>
          Round corner <b>x-small</b>
        </h3>
        <div className="style-demonstration-round-corners-x-small">
          <div className="style-demonstration-box"></div>
        </div>

        <h3>
          Round corner <b>small</b>
        </h3>
        <div className="style-demonstration-round-corners-small">
          <div className="style-demonstration-box"></div>
        </div>

        <h3>
          Round corner <b>normal</b>
        </h3>
        <div className="style-demonstration-round-corners-normal">
          <div className="style-demonstration-box"></div>
        </div>

        <h3>
          Round corner <b>big</b>
        </h3>
        <div className="style-demonstration-round-corners-big">
          <div className="style-demonstration-box"></div>
        </div>
      </div>

      <label className="style-demonstration-headers">Weather states</label>

      <div className="icons-showcase container-fluid row m-5">
        {iconsShowcase}
      </div>
    </div>
  );
}

export default StyleDemonstration;
