export default function Product({ image, reviews,  name, price }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={"/assets/img" + image[0]} alt="image de jean" className="w-4/5" />
      <p>⭐⭐⭐⭐⭐</p>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}
