import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useUpdateCSV from "../../../hooks/useUpdateCSV";
import ContentUpload from "./ContentUpload";

export default function UploadFile() {
  const csvProps = useUpdateCSV();
  const { handleUpload, selectedFile } = csvProps;
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <ContentUpload {...csvProps} />
      </CardContent>
      <CardFooter className="flex items-end justify-end">
        <Button size="lg" onClick={handleUpload} disabled={!selectedFile}>
          Subir
        </Button>
      </CardFooter>
    </Card>
  );
}
