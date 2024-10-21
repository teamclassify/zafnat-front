import DefaultTemplate from "../components/templates/DefaultTemplate";
import { Button } from "../components/ui/button";
import useUser from "../hooks/useUser";

function LoginPage() {
  const { loginWithGoogle } = useUser();

  return (
    <DefaultTemplate>
      <Button onClick={loginWithGoogle}>Login with Google</Button>
      <h1>Hello</h1>
    </DefaultTemplate>
  );
}

export default LoginPage;
