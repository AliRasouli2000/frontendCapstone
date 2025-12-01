import React, {useState} from 'react'
import "./LoginSignUp.css";
import { useContext } from 'react';
import ProgressContext from '../../contexts/ProgressContext';
import { useNavigate } from 'react-router-dom';
import { toast, Bounce } from 'react-toastify';

export const LoginSignUp = () => {

    const [action, setAction] = useState("Sign Up")
    const [formValues, setFormValues] = useState({
      username: "",
      email: "",
      password: "",
    })
    const {userData, setUserData} = useContext(ProgressContext)
    const navigate = useNavigate()

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues(prev => ({ ...prev, [name]: value }));
    }

    const handleLogin = () => {
      // block login if no account stored in userData / "data"
      const hasAccount = !!userData.username || !!userData.email;
      if (!hasAccount) {
        toast.warn("No account found, Sign up first", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        setAction("Sign Up");
        return;
      }

      if (action === "Sign Up") {
        setAction("Login")
        return;
      }

      // check email and password against stored userData
      const email = formValues.email;
      const password = formValues.password;

      if (email !== userData.email) {
        toast.error("Email doesn't match account", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        return;
      }

      if (password !== userData.password) {
        toast.error("Incorrect password", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        return;
      }

      setUserData({ ...userData, loggedIn: true });
      setFormValues({ username: "", email: "", password: "" });
      navigate("/");
    }

    const handleSignUp = () => {
      // don't allow signing up again if we already have a stored user in userData/"data"
      const hasAccount = !!userData.username && !!userData.email;
      if (hasAccount) {
        toast.warn("Account exists. Please log in", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        setAction("Login");
        return;
      }

      if (action === "Login") {
        setAction("Sign Up")
        return;
      }

      const username = formValues.username;
      const email = formValues.email;
      const password = formValues.password;

      if (username.length <= 10) {
        toast.error("Username must be at least 11 characters", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        return;
      }
    
      if (!email.includes("@")) {
        toast.error("Email must include @", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        return;
      }
    
      if (password.length <= 10) {
        toast.error("Password must be at least 11 characters", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        return;
      }
    
      setUserData({ 
        ...userData, 
        username,
        email,
        password,
        loggedIn: true 
      });
      setFormValues({ username: "", email: "", password: "" });
      navigate("/");
    }

  return (
    <div className="login-page">
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <form>
          <div className="inputs">
            {action === "Login" ? (
              <div></div>
            ) : (
              <div className="input">
                <img src="" alt=""/>
                <input 
                  id="username"
                  type="text" 
                  placeholder="Userame"
                  name="username"
                  autoComplete="off"
                  value={formValues.username}
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="input">
              <img src="" alt="" />
              <input 
                id="email"
                type="email" 
                placeholder="Email Id"
                name="email"
                autoComplete="off"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <img src="" alt="" />
              <input 
                id="password"
                type="password" 
                placeholder="Password"
                name="password"
                autoComplete="new-password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="submit-container">
            <div
              className={action === "Login" ? "submit gray" : "submit"}
              onClick={handleSignUp}
            >
              Sign Up
            </div>
            <div
              className={action === "Sign Up" ? "submit gray" : "submit"}
              onClick={handleLogin}
            >
              Login
            </div>
          </div>
          <p className="login-disclaimer">
            This is a mock login. Please do not use a real password or any real information!
          </p>
        </form>
      </div>
    </div>
  )
}
