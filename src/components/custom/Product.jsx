export default function Product({ image, reviews, name, price }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={image} alt="image de jean" className="w-4/5" />
      <div className="flex items-center gap-2">
        <p>⭐⭐⭐⭐⭐</p>
        <p className="text-slate-500 text-xs">({reviews.length})</p>
      </div>
      <p>{name}</p>
      <p className="font-semibold">${price}.000</p>
    </div>
  );
}
