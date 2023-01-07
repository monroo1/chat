import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";

import { SvgIcon, Button } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

import "./header.scss";

const Header = ({ isAuth }) => {
  const logout = () => {
    const auth = getAuth();
    auth.signOut();
  };

  return (
    <header className="header">
      <Link to="/chat">
        <div className="header-logo" style={{ color: "white" }}>
          Chat
        </div>
      </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12 + "px",
        }}
      >
        {!!isAuth && (
          <Button
            variant="outlined"
            sx={{ color: "white", borderColor: "white" }}
            onClick={logout}
          >
            ВЫЙТИ
          </Button>
        )}

        <Link to="/profile">
          <SvgIcon fontSize="large">
            <AccountBoxIcon htmlColor="white" />
          </SvgIcon>
        </Link>
      </div>
    </header>
  );
};

export default Header;
