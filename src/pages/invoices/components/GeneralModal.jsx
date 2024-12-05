import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

function renderValue(value) {
  if (Array.isArray(value)) {
    return (
      <ul className="list-disc ml-4">
        {value.map((item, index) => (
          <li key={index}>{renderValue(item)}</li>
        ))}
      </ul>
    );
  } else if (typeof value === "object" && value !== null) {
    return (
      <div className="ml-4 space-y-2">
        {Object.entries(value).map(([subKey, subValue]) => (
          <p key={subKey}>
            <strong>{subKey.charAt(0).toUpperCase() + subKey.slice(1)}:</strong> {renderValue(subValue)}
          </p>
        ))}
      </div>
    );
  } else {
    return <span>{String(value)}</span>;
  }
}

export function GeneralModal({ isOpen, setIsOpen, data }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Detalles</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4">
            {Object.entries(data).map(([key, value]) => (
              <div key={key} className="space-y-2 break-words">
                <p>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {renderValue(value)}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
        <DialogFooter>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cerrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

