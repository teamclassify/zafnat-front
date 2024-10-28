function ProductCard({ id, name, price, img }) {
  return (
    <>
      <div className="card" key={id}>
        <img src={img} className="card-img-top" alt={name} />

        <div className="text-center mt-4">
          <h5 className="text-md">{name}</h5>
          <p className="text-sm font-bold">${price}</p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
