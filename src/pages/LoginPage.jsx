import LoginCard from "../components/custom/LoginCard";
import DefaultTemplate from "../components/templates/DefaultTemplate";

function LoginPage() {
  return (
    <DefaultTemplate>
      <div className="py-20 flex items-center justify-center">
        <LoginCard />
      </div>
    </DefaultTemplate>
  );
}

export default LoginPage;
