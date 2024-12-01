import { FilesIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";

export default function csv({type}) {
  return (
    <Button variant="outline">
      <div className="flex gap-2 items-center">
        <FilesIcon />
        Generar {type}
      </div>
    </Button>
  );
}
