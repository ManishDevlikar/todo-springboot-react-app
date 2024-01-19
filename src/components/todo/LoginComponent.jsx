import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContex";
export default function LoginComponent() {
  const [username, setUsername] = useState("manish");
  const [password, setPasswod] = useState("");
  const [successLogin, setSuccessLogin] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
  const navigate = useNavigate();
  const authContex = useAuth();
  const handleChangedUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangedPassword = (e) => {
    setPasswod(e.target.value);
  };

  const doLogin = async () => {
    if (await authContex.login(username, password)) {
      navigate(`/welcome/${username}`);
    } else {
      setErrorLogin(true);
      setSuccessLogin(false);
    }
  };

  return (
    <div className="login-comopent">
      <h1>Login here !</h1>
      {errorLogin && (
        <div className="error-message">Invalid username or password.</div>
      )}
      <div className="login-form">
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChangedUsername}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChangedPassword}
          />
        </div>
        <div>
          <button type="button" name="login" onClick={doLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
