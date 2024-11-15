import { SwitchDemo } from "./SwitchDemo";

export default function CardInfoSocialMedia({ socialMedia }) {
  return (
    <div className="flex flex-row justify-between p-4">
      <p>¿Permitir compartir en {socialMedia}?</p>
      <SwitchDemo />
    </div>
  );
}
