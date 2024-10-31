import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function Quantity() {
  return (
    <main>
      <Card className="flex justify-center items-center gap-4">
        <Button variant="ghost">-</Button>
        <p>1</p>
        <Button variant="ghost">+</Button>
      </Card>
    </main>
  );
}
