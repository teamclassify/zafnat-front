import { Link } from "wouter";

function Logo() {
  return (
    <Link href="/">
      <img src="/assets/logo.png" className="w-[100px]" alt="Logo zafnat" />
    </Link>
  );
}

export default Logo;
