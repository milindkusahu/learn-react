import React from "react";
import { records } from "../utils/records";

const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    const groupKey = typeof key === "function" ? key(item) : item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);

    return result;
  }, {});
};

const History = () => {
  const groupedItems = groupBy(records, "region");
  console.log(groupedItems);

  return (
    <div className="main-container">
      {Object.entries(groupedItems).map(([region, items]) => (
        <div key={region}>
          <h2>{region}</h2>

          <div className="data-container">
            {items.map((region, index) => (
              <div key={index} className="data-item">
                <p>
                  <b>Name:</b> {region.name}
                </p>
                <p>
                  <b>Age:</b> <span>{region.age}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
