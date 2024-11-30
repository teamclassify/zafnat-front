import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "../ui/checkbox";

export default function CartDirection({
  address,
  addressSelected,
  setAddressSelected,
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{address.title}</CardTitle>
          <Checkbox
            onCheckedChange={() => setAddressSelected(address)}
            checked={addressSelected?.id === address.id}
          />
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
