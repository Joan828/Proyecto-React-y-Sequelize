import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../../context/UserContext/UserState'
import { Card } from 'antd';
import './Orders.scss'

const { Meta } = Card;

const Orders = () => {
    const {getUserInfo, user} = useContext(UserContext)

    useEffect(()=>{
        getUserInfo()        
    },[])
    //Por alguna razón dentro del return no lee el user.Orders(dice que no está definido)
    console.log("Usuario cuando llega pedidos: ",user.Orders);
    
  return (
        <div className='orders'>
        {/* {user.Orders.map((order) => {
            return (
                <Card
                    key={order.id}
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={<img alt="img order" src="https://d1gl66oyi6i593.cloudfront.net/wp-content/uploads/2020/07/venta-honda-nsx-type-r-1993.jpg" />}
                  >
                    <Meta title={order.description} description={"Productos: " } />
                    <Button type="primary" onClick={()=>addCart(order)}>Comprar</Button>
                </Card>
            )
        })} */}
        Trabajando en ello
    </div>
    
  )
}

export default Orders