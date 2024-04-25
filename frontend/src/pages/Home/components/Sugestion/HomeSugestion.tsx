import React from "react";
import classes from "./HomeSugestion.module.css";
import { Suggestion } from "../../services/DemoDataHome";

function HomeSugestion({ sugestion }: { sugestion: Suggestion }) {
  return (
    <div className={classes.sugestion}>
      HomeSugestion Component
      <h2 className="heading-4">{sugestion.title}</h2>
      <p className="body-text-regular"></p>
      <ul>
        {sugestion.items.map((item, index) => (
          <li key={index}>
            Type: <b>{item.itemType}</b> Description: {item.description}
            <div>Icon: {item.icon}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeSugestion;
