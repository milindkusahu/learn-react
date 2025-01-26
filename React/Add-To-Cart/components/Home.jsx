import { useState } from "react";
import { productList } from "../utils/data";
import toast, { Toaster } from "react-hot-toast";

const Home = ({ setProductId }) => {
  const [data, setData] = useState(productList);

  const handleAddToCart = (id) => {
    setProductId(id);
    toast.success("Product Added Successfully!");
  };

  return (
    <div className="home-container">
      <Toaster position="bottom-center" />
      {data?.map(({ id, model, description, img }) => {
        return (
          <div key={id} className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt={model} />
            <div className="card-body">
              <h5 className="card-title">{model}</h5>
              <p className="card-text">{description}</p>
              <button
                onClick={() => handleAddToCart(id)}
                className="btn btn-primary"
              >
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
