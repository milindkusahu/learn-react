export const records = [
  { name: "Ava Kemp", region: "North-East Region", age: 31 },
  { name: "Colleen Fitzpatrick", region: "Africa", age: 40 },
  { name: "Ava Kemp", region: "Africa", age: 35 },
  { name: "Karen", region: "North Island", age: 40 },
  { name: "Amity Kane", region: "North Island", age: 40 },
  { name: "Karen", region: "Africa", age: 31 },
  { name: "Amity Kane", region: "Sucre", age: 34 },
  { name: "Faith Gilbert", region: "Africa", age: 34 },
  { name: "Igor Ford", region: "North Island", age: 32 },
  { name: "Ava Kemp", region: "Rutland", age: 32 },
];

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

const groupedItems = groupBy(records, "region");

Object.entries(groupedItems).map(([region, items]) => {
  // console.log(region);
  items.map((item, index) => {
    console.log(item);
  });
});
