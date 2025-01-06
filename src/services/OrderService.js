import axios from "axios";

const API_URL = "http://localhost:3000/orders";
let orderNumber = 1

const createOrder = async (cart) => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
console.log(user);

    const ids = cart.map((product=>{
        return product.id
    }))
    const res = await axios.post(API_URL + "/create", {
        description: "Order number: " + orderNumber,
        UserId: user.id,
        ProductId: ids
    }, {
        headers:{
            Authorization:token
        }
    }
    );
    orderNumber++;
    return res;
};

const OrderService={
    createOrder
}

export default OrderService