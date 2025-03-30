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

const Records = () => {
  const groupedItems = groupBy(records, "name");

  console.log(groupedItems);

  return (
    <div>
      {Object.entries(groupedItems).map(([name, records]) => (
        <div key={name}>
          <h3>{name}</h3>
          {records.map((record, recordIndex) => (
            <ul key={recordIndex}>
              <li>Region: {record.region}</li>
              <li>Age: {record.age}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Records;
