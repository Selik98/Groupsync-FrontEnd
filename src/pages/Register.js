import React from "react";
import Background from "./users/background";
import Holder from "./users/holder";
import Data from "./users/data";
import Submit from "./users/submit";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Background>
      <Holder>
        <h1>Registrate</h1>
        <p>Mail</p>
        <Data type="text" />
        <p>Username</p>
        <Data type="text" />
        <p>Password</p>
        <Data type="password"/>
        <Submit type="submit">Registrarse</Submit>
        <Link to="/login">Ya tienes usuario? Iniciar sesión</Link>
      </Holder>
    </Background>
  );
};


export default Register;
