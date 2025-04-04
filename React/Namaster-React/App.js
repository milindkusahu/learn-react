import React from "react";
import ReactDOM from "react-dom/client";
import resObj from "./data.json";

// const restaurant = restaurantData.list[0];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Order Now</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const SvgComponent = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#828282"
      width="18"
      height="18"
      viewBox="0 0 20 20"
      aria-labelledby="icon-svg-title- icon-svg-desc-"
      role="img"
      class="sc-rbbb40-0 iwHbVQ"
    >
      <title>Search</title>
      <path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path>
    </svg>
  );
};

const Search = () => {
  return (
    <div className="search-container">
      <div>
        <SvgComponent />
      </div>
      <input
        className="input-box"
        placeholder="Search for restaurant, cuisine or a dish"
      ></input>
    </div>
  );
};

const RestaurantCards = (props) => {
  const { resData } = props;

  const cuisines = resData.info.cuisine.map((item) => item.name);

  return (
    <div className="res-card">
      <img className="res-image" src={resData.info.image.url} />
      <h2>{resData.info.name}</h2>
      <hr />
      <h3>
        <b>Cuisines:</b> {cuisines.join(", ")}
      </h3>
      <h4>{resData.order.deliveryTime}</h4>
      <h4>{resData.distance}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <Search />
      <div className="card-container">
        {resObj.list.map((restaurant) => (
          <RestaurantCards key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img
          className="logo"
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        />
      </div>
      <div className="footer-nav-items">
        <ul>
          <li>Privacy</li>
          <li>Security</li>
          <li>Terms</li>
          <li>Sitemap</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
