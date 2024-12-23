import React, { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext/UserState";
import { Button, Form, Input, DatePicker } from 'antd';

const RegisterUser = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const {registerUser} = useContext(UserContext)

  const handleSubmit =(data)=>{
    console.log("enviado",data);
    registerUser(data)
  }

  return (
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
  );
};

export default RegisterUser;