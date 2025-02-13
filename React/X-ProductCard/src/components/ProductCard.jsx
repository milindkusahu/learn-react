const ProductCard = () => {
  return (
    <div className="card-container">
      <div className="img-container">
        <img
          src="./product-desktop.jpg"
          alt="A bottle of perfume surrounded by foliage"
        />
      </div>
      <div className="text-container">
        <span className="category">Perfume</span>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <div className="product-desc">
          <p>
            A floral, solar, and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
        </div>
        <div className="price">
          <span className="sale-price">$149.99</span>
          <span className="list-price">$169.99</span>
        </div>
        <div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
