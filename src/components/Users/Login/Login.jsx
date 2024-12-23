import React, { useContext } from 'react'
import { Button, Form, Input } from 'antd';
import { UserContext } from '../../../context/UserContext/UserState';
import { useNavigate } from 'react-router-dom'
import './Login.scss'

const Login = () => {
    const {login} = useContext(UserContext)
    const navigate = useNavigate();
    
    const onFinish = (values) => {
        console.log('Success:', values);
        login(values)
        navigate("/getAll");
    };

    return (
        <div className='userForm'>
            <div className='title'>Inicio de sesión</div>
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
    onFinish={onFinish}
    autoComplete="off"
  >
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
        Iniciar sesión
      </Button>
    </Form.Item>
  </Form>
  </div>
    )
}

export default Login