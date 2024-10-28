

export default function Product({ image, /*review,*/ name, price }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={image} alt="image de jean" className="w-4/5"></img>
      <p>⭐⭐⭐⭐⭐</p>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}
