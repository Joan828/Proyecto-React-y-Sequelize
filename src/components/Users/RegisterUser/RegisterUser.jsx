import React, { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext/UserState";
import { Button, Form, Input } from 'antd';

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
      <div>
      <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
         <Form.Item
            label="Nombre"
            name="name"
            rules={[
              {
                required: true,
                message: 'Por favor introduce tu nombre',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Correo electrónico"
            name="email"
            rules={[
              {
                required: true,
                message: 'Por favor introduce tu correo electrónico',
              },
            ]}
          >
            <Input />
          </Form.Item>
      
          <Form.Item
            label="Contraseña"
            name="password"
            rules={[
              {
                required: true,
                message: 'Por favor introduce tu contraseña',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
      
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Registrarse
            </Button>
          </Form.Item>
        </Form>
        </div>
    </div>
  );
};

export default RegisterUser;