import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Admin.scss";
import Dashboard from "../../components/Dashboard/Dashboard";

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Check if the user is logged in on component mount
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("username", username);
      setLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    setLoggedIn(false);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if (loggedIn) {
    return <Dashboard handleLogout={handleLogout} />;
  }

  return (
    <div className="admin">
      <h2>Admin Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div className="password-input">
        <input
          type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye} // Toggle icon based on showPassword state
          onClick={toggleShowPassword}
          className="password-toggle-icon"
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Admin;
