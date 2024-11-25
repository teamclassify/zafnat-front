import { useState, useRef } from "react";
import { toast } from "sonner";

export default function useUpdateCSV() {
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
        toast.error(
          "Formato incorrecto. Seleccione un archivo CSV e intente nuevamente.",
          {
            style: {
              backgroundColor: "hsl(0 62.8% 30.6% / 1)",
              color: "white",
            },
          }
        );
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

  return {
    handleClick,
    handleDragLeave,
    handleDrop,
    handleUpload,
    handleFileInputChange,
    handleDragOver,
    isDragging,
    selectedFile,
  };
}
