import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import useUpdateCSV from "../../../hooks/useUpdateCSV";
import ContentUpload from "./ContentUpload";
import { Format } from "./FormatGuide";

export default function UploadFile() {
  const csvProps = useUpdateCSV();
  const { handleUpload, selectedFile } = csvProps;

  console.log(csvProps.data);

  return (
    <Card>
      <CardContent className="p-4">
        {csvProps?.data && csvProps.data.status === 400 && (
          <Alert className="mb-4">
            <AlertTitle className="font-bold">Ocurrio un error!</AlertTitle>
            <AlertDescription>{csvProps.data.msg}</AlertDescription>
          </Alert>
        )}

        {csvProps?.data && csvProps.data.status === 200 && (
          <Alert className="mb-4">
            <AlertTitle className="font-bold">
              Orden subida correctamente!
            </AlertTitle>
          </Alert>
        )}

        <ContentUpload {...csvProps} />
      </CardContent>
      <div className="flex items-center justify-center">
        <Format />
      </div>
      <CardFooter className="flex items-end justify-end">
        <Button size="lg" onClick={handleUpload} disabled={!selectedFile}>
          {csvProps.isLoading ? "Subiendo..." : "Subir"}
        </Button>
      </CardFooter>
    </Card>
  );
}
