import React from "react";
import Background from "./users/background";
import Holder from "./users/holder";
import Data from "./users/data";
import Submit from "./users/submit";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Background>
      <Holder>
        <h1>GroupSync</h1>
        <p>Mail</p>
        <Data type="text" />
        <p>Password</p>
        <Data type="password" />
        <Submit type="submit">Iniciar sesión</Submit>
        <Link to="/register">No tienes usuario? Registrate</Link>
      </Holder>
    </Background>
  );
};

export default Login;
