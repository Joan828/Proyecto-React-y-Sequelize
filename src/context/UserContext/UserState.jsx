import React, { createContext, useReducer } from 'react';
import UserReducer from "./UserReducer";
import axios from "axios";

const API_URL = "http://localhost:3000/users"

const token = localStorage.getItem("token") || "";
const user = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  users: [],
  token: token,
  user: user
}

export const UserContext  = createContext(initialState);

export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);
  
    const registerUser = async (user) => {
      const res = await axios.post(API_URL + "/create", user);
    };

    const login = async (user) => {
      const res = await axios.post(API_URL + "/login", user);
      dispatch({
        type: "LOGIN",
        payload: res.data,
      });
      if (res.data) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }
    }

    const getUserInfo = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(API_URL + "/getUserInfoLogged", {
        headers: {
          Authorization: token,
        },
      });
      dispatch({
        type: "GET_USER_INFO",
        payload: res.data.user,
      });      
    };

    const logout = async (user) => {
      const token = localStorage.getItem("token");
      const res = await axios.delete(API_URL + "/logout", {
        headers:{
          Authorization:token
        }
      })
      dispatch({
        type:"LOGOUT"
      })
      if(res.data){
        localStorage.clear()
      }
    };
  
    return (
      <UserContext.Provider
        value={{
          users: state.users,
          token: state.token,
          user: state.user,
          registerUser,
          login,
          getUserInfo,
          logout
        }}
      >
        {children}
      </UserContext.Provider>
    );
  };