import { LoginForm } from "../components/Login-form/login-from";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const handleSubmit = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
};

export const Login = () => {
  return (
    <LoginForm
      title="Авторизация"
      titleButton="Войти"
      linkTo="/signup"
      linkToTitle="Sign UP"
      handleSubmit={handleSubmit}
    />
  );
};
