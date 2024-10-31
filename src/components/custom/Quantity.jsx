import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function Quantity() {
  return (
    <main>
      <Card className="flex justify-center items-center gap-4 w-20">
        <Button variant="ghost" className="p-0">-</Button>
        <p>1</p>
        <Button variant="ghost" className="p-0">+</Button>
      </Card>
    </main>
  );
}
