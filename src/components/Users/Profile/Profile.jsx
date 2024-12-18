import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../../context/UserContext/UserState'
import { Card } from 'antd';
import './Profile.scss'

const { Meta } = Card;

const Profile = () => {
    const {getUserInfo, user} = useContext(UserContext)

    useEffect(()=>{
        getUserInfo()
    },[])
  return (
        <div className='profile'>
        <Card
        hoverable
        style={{
        width: "30%",
        }}
        cover={<img alt="img perfil" src="https://menshealthlatam.com/wp-content/uploads/2024/07/chris-hemsworth-entrenamiento-de-biceps.jpg" />}>
        <Meta title={user.name} description={user.email} />
    </Card>
    </div>
    
  )
}

export default Profile