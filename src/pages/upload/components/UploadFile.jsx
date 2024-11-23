import { useState, useRef } from "react";
import InfoUpload from "./InfoUpload";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";


export default function UploadFile() {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length) {
      if (files[0].type !== "text/csv") {
        toast.error("Solo se permiten archivos csv", {
          style:{
            backgroundColor: "hsl(0 62.8% 30.6% / 1)",
            color: "white"
          }
        });
      } else {
        handleFiles(files[0]);
      }
    }
  };

  const handleFiles = (file) => {
    setSelectedFile(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFiles(files[0]);
    }
  };

  const handleUpload = () => {
    toast.success("Se ha subido el archivo correctamente");
  };

  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <div
          className={`border-2 rounded-lg flex flex-col gap-1 p-20 items-center cursor-pointer ${
            isDragging ? "border-blue-500 bg-blue-100" : "border-gray-200"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <input
            type="file"
            accept=".csv"
            ref={fileInputRef}
            onChange={handleFileInputChange}
            className="hidden"
          />
          <InfoUpload selectedFile={selectedFile} />
        </div>
      </CardContent>
      <CardFooter className="flex items-end justify-end">
        <Button size="lg" onClick={handleUpload} disabled={!selectedFile}>
          Subir
        </Button>
      </CardFooter>
    </Card>
  );
}
