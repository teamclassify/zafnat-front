import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckBoxProductPay } from "./CheckBoxProductPay";

export default function CartDirection({ isChecked, address }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{address.title}</CardTitle>
          <CheckBoxProductPay isChecked={isChecked} />
        </div>
        <CardDescription>
          {
            <>
              <p>{address.address_line_1}</p>
              <p>
                {address.city}, {address.country} - {address.postal_code}
              </p>
            </>
          }
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
