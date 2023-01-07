import { LoginForm } from "../components/Login-form/login-from";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const Signup = () => {
  const handleSubmit = (email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <LoginForm
      title="Регистрация"
      titleButton="Регистрация"
      linkTo="/login"
      linkToTitle="Login"
      handleSubmit={handleSubmit}
    />
  );
};
