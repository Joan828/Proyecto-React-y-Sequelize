import React, { useContext } from 'react'
import { Button, Form, Input } from 'antd';
import { UserContext } from '../../../context/UserContext/UserState';


const Login = () => {
    const {login} = useContext(UserContext)
    const onFinish = (values) => {
        console.log('Success:', values);
        login(values)
    };

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
        Enviar
      </Button>
    </Form.Item>
  </Form>

    )
}

export default Login