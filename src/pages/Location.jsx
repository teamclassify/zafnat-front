import InfoDirection from "../components/custom/InfoDirection";
import Purchase from "../components/custom/Purchase";
import { Title } from "../components/custom/Title";
import DefaultTemplate from "../components/templates/DefaultTemplate";

export default function Location() {
  return (
    <DefaultTemplate>
      <Title title="Dirección" />
      <div className="flex flex-row justify-between">
        <InfoDirection />
        <Purchase buy={true} />
      </div>
    </DefaultTemplate>
  );
}
