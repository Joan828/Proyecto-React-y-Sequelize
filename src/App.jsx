import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./components/Products/Products";
import Users from "./components/Users/Users";
import { ProductProvider } from "./context/ProductContext/ProductState";
import { UserProvider } from "./context/UserContext/UserState";
import Login from "./components/Users/Login/Login";
import Header from "./components/Header/Header";
import Profile from "./components/Users/Profile/Profile";

function App() {
  return (
    <>
    <BrowserRouter>
      <ProductProvider>
      <UserProvider>
        <Header/>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/getAll" element={<Products/>} />
          <Route path="/create" element={<Users/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </UserProvider>
      </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
