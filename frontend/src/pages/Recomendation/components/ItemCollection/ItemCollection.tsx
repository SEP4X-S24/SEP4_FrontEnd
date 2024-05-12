import React, { useState } from "react";
import "./ItemCollection.css";

const items = [
  { id: 1, name: "Rain Pants", imageUrl: "./Items/Umbrella.webp" },
  { id: 2, name: "Raincoat", imageUrl: "/items/Raincoat.webp" },
  { id: 3, name: "Rainhat", imageUrl: "/items/Rainhat.webp" },
  { id: 4, name: "Rubber Shoes", imageUrl: "/items/RubberShoes.webp" },
  { id: 5, name: "Umbrella", imageUrl: "/items/Umbrella.webp" },
  { id: 6, name: "Waterproof Boots", imageUrl: "/items/WaterproofBoots.webp" },
  {
    id: 7,
    name: "Waterproof Jacket",
    imageUrl: "/items/WaterproofJacket.webp",
  },
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
