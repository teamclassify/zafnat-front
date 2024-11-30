import NewAddressTab from "../../pages/profile/components/NewAddressTab";

export default function InfoDirection() {
  return (
    <div className="flex flex-col gap-3 pt-3">
      <NewAddressTab type="new-in-sales" />

      {/* <div className="flex flex-row justify-end pt-2">
        <Link to="/envio">
          <Button>Siguiente</Button>
        </Link>
      </div> */}
    </div>
  );
}
