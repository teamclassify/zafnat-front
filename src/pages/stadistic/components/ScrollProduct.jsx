import { Progress } from "@/components/ui/progress";

export default function ScrollProduct({ product, value }) {
  return (
    <div>
      <p>{product.name}</p>
      <div className="flex flex-row justify-between items-center gap-3">
        <Progress value={value} />
        <p>{value}</p>
      </div>
    </div>
  );
}
