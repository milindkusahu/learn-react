import { useState } from "react";
import { countries } from "../utils/countries";

const Countries = () => {
  const [country, setCountry] = useState("India");
  const [cities, setCities] = useState(
    countries.find((item) => item.name === "India")?.cities || []
  );

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);

    const selectedCities =
      countries.find((item) => item.name === selectedCountry)?.cities || [];
    setCities(selectedCities);
  };

  return (
    <div>
      <h2>Countries</h2>

      <div>
        <select value={country} onChange={handleCountryChange}>
          {countries.map((country, index) => (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>

        <select>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Countries;
