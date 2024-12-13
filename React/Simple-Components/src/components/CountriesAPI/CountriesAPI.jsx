import React, { useEffect, useState } from "react";

const BASE_URL = "https://restcountries.com/v3.1";

const FILTERABLE_CAPITALS = [
  "Tallinn",
  "Helsinki",
  "Stockholm",
  "Oslo",
  "Copenhagen",
  "Reykjavik",
];

const CountriesAPI = () => {
  const [countries, setCountries] = useState([]);
  const [capital, setCapital] = useState();

  useEffect(() => {
    async function fetchData() {
      const url = capital
        ? `${BASE_URL}/capital/${capital}`
        : `${BASE_URL}/all`;
      const data = await fetch(url);
      const response = await data.json();
      setCountries(response);
    }
    fetchData();
  }, [capital]);

  const showAll = () => {
    setCapital(undefined);
  };

  return (
    <div>
      <div className="mb-5">
        <select
          className="p-1 rounded-lg text-slate-700 bg-blue-300"
          onChange={(e) => setCapital(e.target.value)}
        >
          {FILTERABLE_CAPITALS.map((capital) => (
            <option key={capital} value={capital}>
              {capital}
            </option>
          ))}
        </select>
        <button
          className="text-white p-1 bg-red-400 rounded-lg mx-2"
          onClick={showAll}
        >
          Show All
        </button>
      </div>
      {countries.map((country) => (
        <li className="text-white" key={country.cca3}>
          {country.name.common}
        </li>
      ))}
    </div>
  );
};

export default CountriesAPI;
