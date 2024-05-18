import React, { useState } from "react";
import "./RecomendationSetting.css";

const RecomendationSetting: React.FC = () => {
  const [style, setStyle] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");

  const handleStyleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStyle(event.target.value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ style, gender, color });
  };

  return (
    <div className="recomendation-setting">
      <h2>Recommendation Setting</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="style-select">Select Style:</label>
          <select id="style-select" value={style} onChange={handleStyleChange}>
            <option value="">--Please choose an option--</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
            <option value="sport">Sport</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="gender-select">Select Gender:</label>
          <select
            id="gender-select"
            value={gender}
            onChange={handleGenderChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="unisex">Unisex</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="color-select">Select Color:</label>
          <select id="color-select" value={color} onChange={handleColorChange}>
            <option value="">--Please choose an option--</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>
        </div>

        <button type="submit" className="save-button">
          Save
        </button>
      </form>
    </div>
  );
};

export default RecomendationSetting;
