import { Title } from "../components/custom/Title";
import AdminTemplate from "../components/templates/AdminTemplate";

export default function SocialMedia() {
  return (
    <AdminTemplate>
      <main>
        <Title title="Redes Sociales" />
        <p>
          Configure los ajustes de redes sociales para permitir compartir
          productos en Facebook, Whatsapp, Telegram, Instagram y TikTok{" "}
        </p>
      </main>
    </AdminTemplate>
  );
}
