import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext/UserState";
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom'


const RegisterUser = () => {
  const {registerUser, login} = useContext(UserContext)
  const navigate = useNavigate();

  const handleSubmit = async (data)=>{
    //Aquí me ha tocado ponerle un await a la función registerUser, porqué sino intenta hacer el login sin que le haya dado tiempo a registrar al usuario y da error
    await registerUser(data)    
    //data tiene tres campos(name, email y password), pero para hacer login solo le pasamos dos, así que para que no dé error creamos un nuevo objeto con solo los dos campos que se necesitan
    const dataForLogin = {
      email: data.email, 
      password: data.password}
      
    login(dataForLogin)
    navigate("/getAll");
  }

  return (
    <div className='userForm'>
            <div className='title'>Registrarse</div>
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
          onFinish={handleSubmit}
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
  );
};

export default RegisterUser;