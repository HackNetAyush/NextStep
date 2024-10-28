/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Input } from "@nextui-org/input";
import { Button, ButtonGroup } from "@nextui-org/button";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Divider } from "@nextui-org/divider";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const [loginbtnState, setLoginbtnState] = useState(1);
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const serverUrl = "http://localhost:3000";

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const gotoSignup = () => {
    navigate("/signup");
  };

  const userContext = useContext(UserContext);

  // const handleLogin = () => {
  //   console.log("Login");
  // };

  const handleLogin = async () => {
    toast.dismiss();
    setLoginbtnState(0);
    const res = await axios.post(`${serverUrl}/api/v1/auth/login`, {
      email: usernameOrEmail,
      password: password,
    });
    setLoginbtnState(1);
    console.log(res);

    const data = res.data;
    if (data.msg == "Invalid Inputs") {
      toast.error("Invalid Inputs");
    }
    if (data.msg == "no user found") {
      toast.error("no user found");
    }
    if (data.msg == "Invalid password") {
      toast.error("Invalid password");
    }
    if (data.msg == "user signed in") {
      toast.success("user logged in");
      localStorage.setItem("token", data.jwt);
      navigate("/");
    }
    if (data.msg == "error") {
      toast.error("some error occured");
      console.log(data.error);
    }
  };

  return (
    <div className="main flex items-center justify-center  w-full h-full flex-col">
      <div className="top_nav flex items-center justify-center w-full  h-[64px] z-10 fixed top-0">
        <div className="left h-full  flex items-center justify-center">
          <Button
            isIconOnly
            color="primary"
            variant="light"
            aria-label="Go back"
            className="flex items-center justify-center fixed z-10 top-3 left-3"
            onClick={handleGoBack}
          >
            <IoIosArrowBack size={25} />
          </Button>
        </div>
        <div className="right h-full w-[100%] flex items-center justify-center font-bold text-lg">
          NextStep
        </div>
      </div>

      <div className="form_container flex items-center justify-center flex-col gap-2 max-w-[400px] w-[80%] h-full">
        <h1 className="text-2xl font-bold p-5">Welcome Back!, Login</h1>

        <Input
          className="w-full"
          type="email"
          label="Username or Email"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
        />
        <Input
          className="w-full"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          color="primary"
          className="w-full p-6"
          onClick={handleLogin}
          isDisabled={loginbtnState ? false : true}
          // isDisabled
        >
          Login
        </Button>

        <Divider className="my-4" />

        <Button
          onClick={gotoSignup}
          color="primary"
          variant="flat"
          className="w-full p-6"
        >
          Create new account
        </Button>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
