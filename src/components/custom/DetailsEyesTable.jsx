import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaRegEye } from "react-icons/fa";
import { Button } from "../ui/button";

export default function DetailsEyesTable({handleViewClick }) {
  return (
    <>
    <div className="flex gap-3 items-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={handleViewClick} variant="outline">
              <FaRegEye />
              Ver detalles
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Ver detalles</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </>
  )
}