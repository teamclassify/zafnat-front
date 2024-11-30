import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "wouter";


function ProductCard({ id, name, price, img, productId }) {
  return (
    <Link href={`/producto/${productId}`}>
      <div className="card" key={id}>
        <AspectRatio ratio={9 / 16}>
          <img
            src={img || "https://placehold.jp/250x500.png"}
            className="card-img-top object-cover h-full w-full rounded-md"
            alt={name}
          />
        </AspectRatio>

        <div className="text-center mt-4">
          <h5 className="text-md">{name}</h5>
          <p className="text-sm font-bold">
            ${new Intl.NumberFormat().format(price || 0)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
