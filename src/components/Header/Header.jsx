import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext/UserState'
import { Avatar, Space, Button } from "antd";
import './Header.scss'

const Header = () => {
    const {user, logout} = useContext(UserContext)
    const navigate = useNavigate();
    
    const logoutUser = () => {
        //desloguee el usuario
        logout();
        //me redirija a login
        navigate("/login");
    };

  return (
    <div className='header'>
        <div className='leftElements'>
            <Link to="/getAll"><Button>Products List</Button></Link>
        </div>
        {user ? (
            <div className='rightElements'>            
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