import { Link } from "wouter";

import { Skeleton } from "@/components/ui/skeleton";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../ui/button";

import useUser from "../../hooks/useUser";

function Header() {
  const { user, loading, logout } = useUser();

console.log(loading)

  return (
    <header className="p-4 flex items-center justify-between border-b">
      <h1>ZafNat</h1>

      {loading ? (
        <Skeleton className="w-[30px] h-[30px] rounded-full" />
      ) : (
        <>
          {user ? (
            <div>
              <Avatar>
                <AvatarImage src={user?.photo} width={"30px"} />
                <AvatarFallback>{user.firstName}</AvatarFallback>
              </Avatar>

              <Button onClick={logout}>Logout</Button>
            </div>
          ) : (
            <>
              <Link href="/login">Login</Link>
            </>
          )}
        </>
      )}
    </header>
  );
}

export default Header;
