import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import useProduct from "../../../hooks/useProduct";
import ScrollProduct from "./ScrollProduct";

export default function CardProduct({ title}) {
  const {products} = useProduct()
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col justify-between gap-4">
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {products.products.map((product) => (
          <ScrollProduct key={product.id} product={product}/>
        ))}
      </CardContent>
    </Card>
  );
}
