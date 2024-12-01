import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ButtonReturn from "../tables/orders/ButtonReturn";

export default function ReturnsTableButton({row}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <ButtonReturn id={row.getValue("id")} />
        </TooltipTrigger>
        <TooltipContent>
          <p>Pedir devolución</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
