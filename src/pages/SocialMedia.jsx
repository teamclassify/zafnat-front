import { CardSocialMedia } from "../components/custom/CardSocialMedia";
import { Title } from "../components/custom/Title";
import AdminTemplate from "../components/templates/AdminTemplate";

export default function SocialMedia() {
  return (
    <AdminTemplate>
      <main className="flex flex-col gap-5">
        <Title title="Redes Sociales" />
        <p>
          Configure los ajustes de redes sociales para permitir compartir
          productos en Facebook, Whatsapp, Telegram, Instagram y TikTok
        </p>
        <CardSocialMedia />
      </main>
    </AdminTemplate>
  );
}
