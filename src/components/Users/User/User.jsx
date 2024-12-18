import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../../context/UserContext/UserState'

const Users = () => {
    const {users, registerUser} = useContext(UserContext)
    useEffect(()=>{
        // registerUser()//Aquí iría el getAll de usuarios
    }, []);
    // {console.log(users)}    

  return (
    <div className="users-container">
        {users.map((user) => {
            return (
                <p key={user.id}>{user.name}</p>
            )
        })}
    </div>
  )
}

export default Users