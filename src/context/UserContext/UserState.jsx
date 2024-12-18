import React, { createContext, useReducer } from 'react';
import UserReducer from "./UserReducer";
import axios from "axios";

const initialState = {
  users: []
}


export const UserContext  = createContext(initialState);

export const UserProvider = ({children}) => {
    const [state] = useReducer(UserReducer, initialState);
  
    const registerUser = async (user) => {
      const res = await axios.post("http://localhost:3000/users/create", user);
      console.log(res.data);

    };
  
    return (
      <UserContext.Provider
        value={{
          users: state.users,
          registerUser,
        }}
      >
        {children}
      </UserContext.Provider>
    );
  };