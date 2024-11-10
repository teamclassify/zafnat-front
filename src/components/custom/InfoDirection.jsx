import { Button } from "../ui/button";
import CountryForm from "./CountryForm";
import InputForm from "./InputForm";

export default function InfoDirection() {
  return (
    <div className="flex flex-col gap-3 pt-3">
      <InputForm
        title={"Nombre de la compañía"}
        placeholder={"Nombre de la compañía"}
        type={"text"}
        isRequired={false}
      />
      <div className="flex gap-4">
        <InputForm
          title={"Primer Nombre"}
          placeholder={"Primer Nombre"}
          type={"text"}
          isRequired={true}
        />
        <InputForm
          title={"Primer Apellido"}
          placeholder={"Primer Apellido"}
          type={"text"}
          isRequired={true}
        />
      </div>
      <div className="flex gap-4">
        <InputForm
          title={"Email"}
          placeholder={"email@ejemplo.com"}
          type={"email"}
          isRequired={true}
        />
        <InputForm
          title={"Dirección"}
          placeholder={"Avenida 3, Barrio ... "}
          type={"text"}
          isRequired={true}
        />
      </div>
      <CountryForm />
      <div className="flex gap-4">
        <InputForm
          title={"Ciudad"}
          placeholder={"Ciudad"}
          type={"text"}
          isRequired={true}
        />
        <InputForm
          title={"Código postal"}
          placeholder={"Código postal"}
          type={"number"}
          isRequired={true}
        />
      </div>
      <InputForm
        title={"Numero de celular"}
        placeholder={"301-2313-221"}
        type={"number"}
        isRequired={true}
      />
      <div className="flex flex-row justify-end pt-2">
        <Button>Agregar dirección</Button>
      </div>
    </div>
  );
}
