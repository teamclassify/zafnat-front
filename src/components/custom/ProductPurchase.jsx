import { Separator } from "@/components/ui/separator";

export default function ProductPurchase({image, price, name, quantity}) {
  return (
    <div className="flex flex-col gap-3 pt-4">
      <div className="flex flex-row">
        <img src={image} className="w-2/12" />
        <div className="flex flex-col gap-2">
          <p>{name}</p>
          <p>
            ${price} x{quantity}
          </p>
        </div>
      </div>
      <Separator />
    </div>
  );
}
