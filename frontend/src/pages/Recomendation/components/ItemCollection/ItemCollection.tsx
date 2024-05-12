import React from "react";
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
  return (
    <div className="item-collection">
      <h2>Check all suggested items</h2>
      <div className="items-grid">
        {items.map((item) => (
          <div key={item.id} className="item">
            <img src={item.imageUrl} alt={item.name} />
            <p>{item.name}</p>
            <button>View Item</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemCollection;
