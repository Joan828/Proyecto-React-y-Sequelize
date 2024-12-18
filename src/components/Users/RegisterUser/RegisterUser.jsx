import React, { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext/UserState";

const RegisterUser = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const {registerUser} = useContext(UserContext)

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log("enviado",data);
    registerUser(data)
  }
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Inserta tu nombre"
          name="name"
          value={data.name}
          onChange={handleInputChange}
        /><br/>
        <input
          type="text"
          placeholder="Inserta tu correo"
          name="email"
          value={data.email}
          onChange={handleInputChange}
        /><br/>
        <input
          type="password"
          placeholder="Inserta tu contraseña"
          name="password"
          value={data.password}
          onChange={handleInputChange}
        /><br/>
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
};

export default RegisterUser;