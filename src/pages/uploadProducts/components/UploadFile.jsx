import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useUpdateCSV from "../../../hooks/useUpdateCSV";
import ContentUpload from "./ContentUpload";
import { Format } from "./FormatGuide";

export default function UploadFile() {
  const csvProps = useUpdateCSV();
  const { handleUpload, selectedFile } = csvProps;

  return (
    <Card>
      <CardContent className="p-4">
        <ContentUpload {...csvProps} />
      </CardContent>
      <div className="flex items-center justify-center">
        <Format />
      </div>
      <CardFooter className="flex items-end justify-end">
        <Button size="lg" onClick={handleUpload} disabled={!selectedFile}>
          Subir
        </Button>
      </CardFooter>
    </Card>
  );
}
