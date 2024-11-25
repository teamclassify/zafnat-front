import { useQuery } from "react-query";
import { Link } from "wouter";
import Purchase from "../components/custom/Purchase";
import ShippingInfo from "../components/custom/ShippingInfo";
import { Title } from "../components/custom/Title";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import { Button } from "../components/ui/button";
import CartService from "../services/api/CartService";

export default function Shipping() {
  const { data, isLoading, isFetching } = useQuery(
    "products-cart",
    CartService.getAll
  );

  return (
    <DefaultTemplate>
      <Title title="Metodo de envío" />
      <p>La dirección de envío es en Colombia, Bogotá</p>
      <div className="flex flex-row justify-between gap-3">
        <div className="flex flex-col pt-4 h-1/2 w-2/4 gap-4 ">
          <ShippingInfo
            title={"Envíos Nacionales"}
            description={"Depende de la zona"}
            icon={"Truck"}
          />

          <form
            method="post"
            action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/"
          >
            <input name="merchantId" type="hidden" value="1017515" />
            <input name="accountId" type="hidden" value="512321" />
            <input name="description" type="hidden" value="Test PAYU" />
            <input name="referenceCode" type="hidden" value="1092940348" />
            <input name="amount" type="hidden" value="20000" />
            <input name="tax" type="hidden" value="3193" />
            <input name="taxReturnBase" type="hidden" value="16806" />
            <input name="currency" type="hidden" value="COP" />
            <input
              name="signature"
              type="hidden"
              value="255cfb4a71aa5b907a81614fccaa95a0"
            />
            <input
              name="algorithmSignature"
              type="hidden"
              value="MD5"
            />
            <input name="test" type="hidden" value="1" />
            <input name="buyerEmail" type="hidden" value="test@test.com" />
            <input name="telephone" type="hidden" value="3237702573" />
            <input name="buyerFullName" type="hidden" value="Test Name" />
            <input name="payerPhone" type="hidden" value="3237702573" />
            <input name="payerFullName" type="hidden" value="Test Name" />
            <input name="payerDocument" type="hidden" value="1092940348" />
            <input name="payerDocumentType" type="hidden" value="1092940348" />
            <input
              name="responseUrl"
              type="hidden"
              value="http://www.test.com/response"
            />
            <input
              name="confirmationUrl"
              type="hidden"
              value="http://www.test.com/confirmation"
            />
            <input name="Submit" type="submit" value="Enviar" />
          </form>

          <div className="flex flex-row justify-end pt-2">
            <Link to="/pago">
              <Button>Siguiente</Button>
            </Link>
          </div>
        </div>
        <Purchase buy={true} data={data} isLoading={isLoading || isFetching} />
      </div>
    </DefaultTemplate>
  );
}
