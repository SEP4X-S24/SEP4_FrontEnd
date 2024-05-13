import React, { useState } from "react";
import "./ItemCollection.css";
import rainPants from "./Items/RainPants.webp";
import raincoat from "./Items/Raincoat.webp";
import rainhat from "./Items/RainHat.webp";
import rubberShoes from "./Items/RubberShoes.webp";
import umbrella from "./Items/Umbrella.webp";
import waterproofBoots from "./Items/WaterproofBoots.webp";
import waterproofJacket from "./Items/WaterproofJacket.webp";

const items = [
  { id: 1, name: "Rain Pants", imageUrl: rainPants },
  { id: 2, name: "Raincoat", imageUrl: raincoat },
  { id: 3, name: "Rainhat", imageUrl: rainhat },
  { id: 4, name: "Rubber Shoes", imageUrl: rubberShoes },
  { id: 5, name: "Umbrella", imageUrl: umbrella },
  { id: 6, name: "Waterproof Boots", imageUrl: waterproofBoots },
  { id: 7, name: "Waterproof Jacket", imageUrl: waterproofJacket },
];

const ItemCollection: React.FC = () => {
  const [viewAll, setViewAll] = useState(false);

  const displayedItems = viewAll ? items : items.slice(0, 4);

  return (
    <div className="item-collection">
      <h2>Check all suggested items</h2>
      <div className="items-grid">
        {displayedItems.map((item) => (
          <div key={item.id} className="item">
            <img src={item.imageUrl} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      {!viewAll && (
        <button className="view-all-btn" onClick={() => setViewAll(true)}>
          View All
        </button>
      )}
    </div>
  );
};

export default ItemCollection;
