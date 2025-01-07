import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../../context/UserContext/UserState'
import { Card, Button, Typography } from 'antd';
const { Text, Paragraph, Title } = Typography;
import './Orders.scss'

const { Meta } = Card;

const Orders = () => {
    const {getUserInfo, user} = useContext(UserContext)
    let total = 0

    useEffect(()=>{
        getUserInfo()        
    },[])
    //Por alguna razón dentro del return no lee el user.Orders(dice que no está definido)
    console.log("Usuario cuando llega pedidos: ",user.Orders);

  return (
        <div className='orders'>
        {user.Orders?.map((order) => {
            return (
                  <div className='orders'>
                    <Card
                        key={order.id}
                        hoverable
                        //onClick={editOrder}
                        style={{
                          width: 200,
                        }}
                        cover={<img alt="img coche" src="https://cdn-icons-png.flaticon.com/512/7132/7132915.png" />}
                      >
                        <Meta title={order.description} description={"Productos: " + order.Products.map((product)=>{total += +product.price 
                          return(" "+product.name + " ("+ product.price + "€)")})} />
                        <div className='total'>Total: {total}€</div> 
                        <Button type="primary" 
                          style={{
                            width: 70
                          }}
                        //onClick={()=>addCart(product)}
                        >Comprar</Button>
                        <Button type="primary" danger
                        style={{
                          width: 70
                        }}
                        //onClick={()=>addCart(product)}
                        >Eliminar</Button>
                    </Card>
                  </div>
            )
        })}
   </div>
    
  )
}

export default Orders