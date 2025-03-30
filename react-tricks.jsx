/**
 * This function is extremely versatile:
 * => It works with any array of objects
 * => The key can be either a string property name or a function that derives a key
 * => It returns an object where keys are your grouping values and values are arrays of items
 */

function groupBy(array, key) {
  return array.reduce((result, item) => {
    // Get the group key value
    const groupKey = typeof key === "function" ? key(item) : item[key];

    // If this key doesn't exist yet, create it
    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    // Add the item to its group
    result[groupKey].push(item);

    return result;
  }, {});
}

// Group by a simple property
const groupedByMonth = groupBy(histories, (item) => {
  // Extract month-year from date string
  const parts = item.historyDate.split("-");
  return `${parts[1]}-${parts[2].split("T")[0]}`; // month-year
});

// To render in React, convert to array first
const groupsArray = Object.keys(groupedByMonth).map((key) => ({
  name: key,
  items: groupedByMonth[key],
}));

// Then in your JSX:
return (
  <div>
    {groupsArray.map((group) => (
      <div key={group.name}>
        <h3>{group.name}</h3>
        {group.items.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    ))}
  </div>
);
