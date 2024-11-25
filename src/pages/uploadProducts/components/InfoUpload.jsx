import { FileIcon } from "@radix-ui/react-icons";

export default function InfoUpload({selectedFile}) {
  return (
    <>
      <FileIcon className="w-12 h-12" />
      <span className="text-sm font-medium text-gray-500">
        {selectedFile
          ? `Archivo seleccionado: ${selectedFile.name}`
          : "Arrastra y suelta un archivo o haz clic para buscar"}
      </span>
      <span className="text-xs text-gray-500">Archivo CSV</span>
    </>
  );
}
