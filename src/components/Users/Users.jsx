import React from 'react'
import User from './User/User'
import RegisterUser from './RegisterUser/RegisterUser'

const Users = () => {
  return (
    <div>Users
        <RegisterUser/>
        {/* Nos importamos el componente User que pintará cada usuario */}
        <User/>
    </div>
  )
}

export default Users