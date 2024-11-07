import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckBoxProductPay } from "./CheckBoxProductPay";

export default function CartDirection({isChecked}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>Jhon Deo</CardTitle>
          <CheckBoxProductPay isChecked={isChecked}/>
        </div>
        <CardDescription>
          3650 Court Street, California, FL , US 9006
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
