import { useState } from "react";

import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export const LoginForm = ({
  title,
  titleButton,
  linkTo,
  linkToTitle,
  handleSubmit,
}) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  const handleSubmitForm = () => {
    if (!form.email || !form.password) {
      return;
    }
    try {
      handleSubmit(form.email, form.password);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="auth-form">
      <div className="auth-form__content">
        <h2>{title}</h2>
        <TextField
          id="outlined-basic"
          label="email"
          variant="outlined"
          value={form.email}
          onChange={handleChangeForm}
          inputProps={{
            "data-name": "email",
          }}
          fullWidth
        />
        <TextField
          id="outlined-basic"
          label="password"
          variant="outlined"
          value={form.password}
          onChange={handleChangeForm}
          inputProps={{
            "data-name": "password",
          }}
          fullWidth
        />
        <div className="auth-form__content-nav">
          <Button variant="contained" onClick={handleSubmitForm}>
            {titleButton}
          </Button>
          <Link to={linkTo}>
            <Button variant="outlined">{linkToTitle}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
