import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext/UserState'
import { Avatar, Space, Button, Badge } from "antd";
import './Header.scss'
import { ProductContext } from '../../context/ProductContext/ProductState';
import { ShoppingCartOutlined } from "@ant-design/icons";

const Header = () => {
    const {user, logout} = useContext(UserContext)
    const {cart} = useContext(ProductContext)
    const navigate = useNavigate();

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])

    const logoutUser = () => {
        //desloguee el usuario
        logout();
        //me redirija a login
        navigate("/login");
    };

  return (
    <div className='header'>
        <div className='leftElements'>
            <Link to="/getAll"><Button>Lista de coches</Button></Link>
        </div>
        {user ? (
            <div className='rightElements'>   
            <Link to='/cart'>Carrito <Badge count={cart.length}>
              <ShoppingCartOutlined />
            </Badge>{" "}</Link>         
            <Link to="/profile"><Space size={16} wrap>
                <Avatar>{user.name[0]}</Avatar>
                </Space>
            </Link>
            <Button color="default" variant="solid" onClick={logoutUser}>Cerrar Sesión</Button>
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