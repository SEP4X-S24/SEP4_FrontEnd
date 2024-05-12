import React from "react";
import "./ItemCollection.css"; // Ensure this CSS file is linked

const ItemCollection: React.FC = () => {
  const items = [
    {
      id: 1,
      name: "Sneakers",
      image: "/images/sneakers.jpg",
      description: "Item name",
    }, // Replace with actual data and paths
    {
      id: 2,
      name: "Hoodie",
      image: "/images/hoodie.jpg",
      description: "Item name",
    },
    {
      id: 3,
      name: "Jeans",
      image: "/images/jeans.jpg",
      description: "Item name",
    },
    {
      id: 4,
      name: "T-shirt",
      image: "/images/tshirt.jpg",
      description: "Item name",
    },
  ];

  return (
    <div className="collection-container">
      <h2>Check all suggested items</h2>
      <h3>Collection</h3>
      <div className="item-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-info">
              <span className="item-name">{item.description}</span>
              <button className="item-button">View</button>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-button">VIEW ALL</button>
    </div>
  );
};

export default ItemCollection;
