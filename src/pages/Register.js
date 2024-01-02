import React from "react";
import Background from "./users/background";
import Error from "./users/error";
import Holder from "./users/holder";
import Data from "./users/data";
import Submit from "./users/submit";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <Background>
      <Holder onSubmit={handleSubmit(onSubmit)}>
        <h1>Registrate</h1>
        <p>Mail</p>
        <Data
          type="text"
          {...register("mail", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
        />
        {errors.mail?.type === "required" && (
          <Error>Debes ingresar un mail</Error>
        )}
        {errors.mail?.type === "pattern" && (
          <Error>La direccion de correo debe ser real</Error>
        )}
        <p>Username</p>
        <Data type="text" {...register("user", { required: true })} />
        {errors.user?.type === "required" && (
          <Error>Debes ingresar un nombre de usuario</Error>
        )}

        <p>Password</p>
        <Data
          type="password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password?.type === "required" && (
          <Error>Debes ingresar un password</Error>
        )}
        {errors.password?.type === "minLength" && (
          <Error>El password debe tener minimo 6 caracteres</Error>
        )}

        <Submit type="submit">Registrarse</Submit>
        <Link to="/login">Ya tienes usuario? Iniciar sesión</Link>
      </Holder>
    </Background>
  );
};

export default Register;
