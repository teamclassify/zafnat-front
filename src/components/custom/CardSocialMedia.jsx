import { Card, CardContent } from "@/components/ui/card";
import CardInfoSocialMedia from "./CardInfoSocialMedia";

export function CardSocialMedia() {
  return (
    <div className="w-2/4">
      <Card>
        <CardContent>
          <CardInfoSocialMedia socialMedia="Facebook" />
          <CardInfoSocialMedia socialMedia="Twitter" />
          <CardInfoSocialMedia socialMedia="WhatsApp" />
          <CardInfoSocialMedia socialMedia="Telegram" />
          <CardInfoSocialMedia socialMedia="Instagram" />
          <CardInfoSocialMedia socialMedia="TikTok" />
        </CardContent>
      </Card>
    </div>
  );
}
