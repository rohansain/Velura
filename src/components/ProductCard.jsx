const ProductCard = ({ product }) => {
  return (
    <div className="card card-vertical d-flex direction-column relative shadow">
      <div className="card-image-container">
        <img className="card-image" src={product.images[0]} alt="shoes" />
      </div>
      <div className="card-details flex flex-col flex-1">
        <div className="card-title text-sm">{product.title}</div>
        <div className="card-description flex-1">
          <p className="card-des">{product.slug}</p>
          <p className="card-price">${product.price}</p>
        </div>
        <div className="cta-btn mt-auto m">
          <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
            <span className="material-symbols-outlined">shopping_cart</span>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
