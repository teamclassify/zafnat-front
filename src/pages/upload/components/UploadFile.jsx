import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UploadFile() {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true); // Activa el estado al arrastrar
  };

  const handleDragLeave = () => {
    setIsDragging(false); // Desactiva el estado al salir
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false); // Resetea el estado al soltar el archivo
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <div
          className={`border-2 rounded-lg flex flex-col gap-1 p-20 items-center ${
            isDragging ? "border-blue-500 bg-blue-100" : "border-gray-200"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <FileIcon className="w-12 h-12" />
          <span className="text-sm font-medium text-gray-500">
            {selectedFile
              ? `Archivo seleccionado: ${selectedFile.name}`
              : "Arrastra y suelta un archivo o haz clic para buscar"}
          </span>
          <span className="text-xs text-gray-500">Archivo CSV</span>
        </div>
        <div className="space-y-2 text-sm">
          <Label htmlFor="file" className="text-sm font-medium">
            Archivo
          </Label>
          <Input
            id="file"
            type="file"
            accept=".csv"
            onChange={handleFileChange}
          />
        </div>
      </CardContent>
      <CardFooter className="flex items-end justify-end">
        <Button size="lg">Subir</Button>
      </CardFooter>
    </Card>
  );
}

function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}
