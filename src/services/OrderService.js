import axios from "axios";

const API_URL = "http://localhost:3000/orders";

const createOrder = async (cart) => {
  const token = localStorage.getItem("token");
//   const ids = map

const ids = cart.map((product=>{
    return product.id
}))
  const res = await axios.post(API_URL + "/create", {
    ProductId: ids, // en sequelize habría que hacer un paso más (map)
  }, {
    headers:{
        Authorization:token
    }
  }
);
  return res;
};

const OrderService={
    createOrder
}

export default OrderService