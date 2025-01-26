import toast, { Toaster } from "react-hot-toast";

const Cart = ({ cartItems, setCartItems }) => {
  const handleIncrement = (id) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    const filteredItem = cartItems.filter((product) => product.id !== id);
    setCartItems(filteredItem);
    toast.error("Product Deleted Successfully!");
  };

  return (
    <div className="home-container">
      <Toaster position="bottom-center" />
      {cartItems?.map(({ id, model, description, img, count }, index) => {
        return (
          <div key={index} className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt={model} />
            <div className="card-body">
              <h5 className="card-title">{model}</h5>
              <p className="card-text">{description}</p>

              <div className="d-flex gap-3 mt-1">
                <p
                  onClick={() => handleDecrement(id)}
                  className="m-0 border p-0 px-2 py-1 rounded pointer"
                >
                  -
                </p>
                <p className="m-0">{count}</p>
                <p
                  onClick={() => handleIncrement(id)}
                  className="m-0 border p-0 px-2 py-1 rounded pointer"
                >
                  +
                </p>
                <p onClick={() => handleDeleteItem(id)}>
                  <i className="fa-solid fa-trash text-danger pointer"></i>
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {cartItems.length === 0 && (
        <div className="col-12">
          <h1 className="text-center fs-3">No Products Availabe in Cart</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
