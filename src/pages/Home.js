import "../Tailwind.css";
import Header from "../components/Header";
import Home from "../components/Home";
import LoginForm from "../components/Login";

function HomePage() {
  return (
    <div>
      <Header />
      <Home />
      <LoginForm />
    </div>
  );
}

export default HomePage;
