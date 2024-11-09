import { Link } from "wouter";
import { Button } from "../ui/button";

export default function PayButton({buy, totalPrice}) {
  return (
    <div className="flex justify-end pt-5">
      {!buy && (
        <Link to="/entrega">
          <Button disabled={totalPrice === 0}>
            Proceder al pago
          </Button>
        </Link>
      )}
    </div>
  );
}
