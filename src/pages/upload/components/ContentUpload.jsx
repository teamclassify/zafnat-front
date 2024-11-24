import InfoUpload from "./InfoUpload";
import { useRef } from "react";

export default function ContentUpload({
  handleDragLeave,
  handleDrop,
  handleDragOver,
  handleFileInputChange,
  selectedFile,
  isDragging
}) {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={`border-2 rounded-lg flex flex-col gap-1 p-20 items-center cursor-pointer ${
        isDragging ? "border-blue-500 bg-blue-100" : "border-gray-200"
      } ${selectedFile ? "bg-slate-100" : "border-gray-200"}`}
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
  );
}
