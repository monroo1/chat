import { Link } from "react-router-dom";

import { SvgIcon } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/chat">
        <div className="header-logo" style={{ color: "white" }}>
          Chat
        </div>
      </Link>
      <Link to="/profile">
        <SvgIcon fontSize="large">
          <AccountBoxIcon htmlColor="white" />
        </SvgIcon>
      </Link>
    </header>
  );
};

export default Header;
