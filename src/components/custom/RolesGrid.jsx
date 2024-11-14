import { CardInfoRoles } from "./CardInfoRoles";

export function RolesGrid({ roles }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
      {roles.map((rol) => (
        <CardInfoRoles
          key={rol.id}
          nameRol={rol.name}
          count={0}
        />
      ))}
    </div>
  );
}
