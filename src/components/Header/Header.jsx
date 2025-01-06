import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext/UserState'
import { Avatar, Space, Button, Badge, Dropdown } from "antd";
import './Header.scss'
import { ProductContext } from '../../context/ProductContext/ProductState';
import { ShoppingCartOutlined, DownOutlined } from "@ant-design/icons";

const Header = () => {
    const {user, logout} = useContext(UserContext)
    const {cart} = useContext(ProductContext)
    const navigate = useNavigate();

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])

    const logoutUser = () => {
        logout();
        navigate("/login");
    };

    const items = [
        {
          label: (
            <Link to="/profile">
                Perfil
            </Link>
          ),
          key: '0',
        },
        {
          label: (
            <Link to="/orders">
                Ver mis pedidos
            </Link>
          ),
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: (
            <Button color="default" variant="solid" onClick={logoutUser}>Cerrar Sesión</Button>
          ),
          key: '3',
        },
      ];

  return (
    <div className='header'>
        <div className='leftElements'>
            <Link to="/getAll"><Button>Lista de coches</Button></Link>
        </div>
        {user ? (
            <div className='rightElements'> 
            <Button>
                <Link to='/cart'>Carrito
                <ShoppingCartOutlined />
                <Badge count={cart.length} className='badge'></Badge></Link> 
            </Button>

            <Space direction="vertical">
            <Space wrap>
            <Dropdown
                menu={{
                    items,
                  }}
                placement="bottomRight"
                trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                <Space>
                    <Space size={16} wrap>
                        <Avatar>{user.name[0].toUpperCase()}</Avatar>
                    </Space>
                </Space>
                </a>
            </Dropdown>
            </Space>
            </Space>
            
        </div>
        )
        :
        (<div className='rightElements'>
            <Link to="/login"><Button type="primary">Iniciar Sesión</Button></Link>
            <Link to="/create"><Button type="primary">Registrarse</Button></Link> 
        </div>)
        }
        
    </div>
  )
}

export default Header