import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'
import { Card, Button, Empty } from 'antd';
import './Cart.scss'
import { DeleteOutlined } from "@ant-design/icons";
import OrderService from '../../services/OrderService';

const { Meta } = Card;

const Cart = () => {
    const {cart, clearCart} = useContext(ProductContext)
    if(cart.length == 0){
        return <Empty description="El carrito está vacío"/>
    }
  return (
    <div className='cartProducts'>{cart.map(product =>{
        return (<Card
                    className='productCard'
                    key={product.id}
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={<img alt="img coche" src="https://d1gl66oyi6i593.cloudfront.net/wp-content/uploads/2020/07/venta-honda-nsx-type-r-1993.jpg" />}
                  >
                    <Meta title={product.name} description={"Precio: "+product.price + "€"} />
                </Card>)
    })}
    <Button onClick={clearCart}>Limpiar Carrito<DeleteOutlined/></Button>
    <Button onClick={()=>{
        OrderService.createOrder(cart)
        clearCart()
        }}>Hacer pedido</Button>
    </div>
  )
}

export default Cart