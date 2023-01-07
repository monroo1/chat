import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "./api/firebase";

import Header from "./components/Header/header";
import { PublickRoute, PrivateRoute } from "./components/route";
import { ChatPage, Profile, Login, Signup } from "./pages";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);

  const isAuth = session?.email;

  return (
    <div className="App">
      <Header isAuth={isAuth} />
      <Routes>
        <Route
          path={"/*" || "chat/*"}
          element={
            <PrivateRoute isAuth={isAuth}>
              <ChatPage />
            </PrivateRoute>
          }
        />
        <Route
          path="profile"
          element={
            <PrivateRoute isAuth={isAuth}>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublickRoute isAuth={isAuth}>
              <Login />
            </PublickRoute>
          }
        />
        <Route
          path="signup"
          element={
            <PublickRoute isAuth={isAuth}>
              <Signup />
            </PublickRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
