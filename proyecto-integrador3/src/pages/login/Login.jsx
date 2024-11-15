import { useForm } from "react-hook-form";
import "./Login.css";
import { useUser } from "../../context/UserContext";




export default function Login() {

  const { register, handleSubmit } = useForm();

  const { login } = useUser();

  return (
    <div className="login-container">

<div className="note">♪</div>
<div className="note">♪</div>
    <div className="note">♬</div>
    <div className="note">♩</div>
    <div className="note">♫</div>
    <div className="note">♭</div>
    <div className="note">♮</div>
    <div className="note">♯</div>
    <div className="note">♪</div>

      <form className="login-form" onSubmit={handleSubmit(login)}>
        <h1>Login</h1>
        <label>Correo electrónico</label>
        <input
          type="email"
          placeholder="Correo electrónico"
          {...register("email", {
            required: "El email es requerido",
            minLength: {
              value: 4,
              message: "El email debe tener al menos 4 caracteres"
            }
          })
          }
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Contraseña"
          {...register("password", { required: "El email es requerido" })}
        />

        <button type="submit" className="button">
          Ingresar
        </button>
      </form>

      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>

    </div>
  );
}

