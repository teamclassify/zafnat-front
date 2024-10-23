import Header from "../components/custom/Header";
import { Input } from "@/components/ui/input";
import Filter from "../components/custom/Filter";
import { CardInfo } from "../components/custom/CardInfo";

function UserList() {
  return (
    <>
      <Header />
      <div className="pl-20 pr-20">
        <h3 className="scroll-m-20 pb-2 pt-6 text-2xl font-semibold tracking-tight first:mt-0 text-slate-700">
          Usuarios
        </h3>
        <div className="flex gap-10">
          <Input type="text" placeholder="Buscar" className="pl-6 w-2/5" />
          <Filter />
        </div>
        <div className="pt-10">
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4">
            <CardInfo />
            <CardInfo />
            <CardInfo />
            <CardInfo />
            <CardInfo />
            <CardInfo />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserList;
