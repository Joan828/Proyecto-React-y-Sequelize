import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../../context/UserContext/UserState'
import { Card, Button } from 'antd';
import './Orders.scss'

const { Meta } = Card;

const Orders = () => {
    const {getUserInfo, user} = useContext(UserContext)

    useEffect(()=>{
        getUserInfo()        
    },[])

  return (
        <div className='orders'>
        {user.Orders?.map((order,i) => {
          order["total" + order.id] = 0          
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
                        <Meta title={"Nº Pedido: " + order.id} description={"Productos: " + order.Products.map((product)=>{
                           order["total"+order.id]  += +product.price 
                          return(" "+product.name + " ("+ product.price + "€)")})} />
                        <div className='total'>Total: { order["total"+order.id]}€</div>                    
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