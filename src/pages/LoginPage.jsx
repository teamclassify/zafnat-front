import DefaultTemplate from "../components/templates/DefaultTemplate";
import LoginCard from "../components/custom/LoginCard";

function LoginPage() {
  return (
    <DefaultTemplate>
      <div className="flex items-center justify-center">
        <LoginCard />
      </div>
    </DefaultTemplate>
  );
}

export default LoginPage;