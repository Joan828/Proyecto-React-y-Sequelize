import "./App.css";
import Products from "./components/Products/Products";
import Users from "./components/Users/Users";
import { ProductProvider } from "./context/ProductContext/ProductState";
import { UserProvider } from "./context/UserContext/UserState";

function App() {
  return (
    <>
      <ProductProvider>
      <UserProvider>
        <Products />
        <Users />
      </UserProvider>
      </ProductProvider>
    </>
  );
}

export default App;
