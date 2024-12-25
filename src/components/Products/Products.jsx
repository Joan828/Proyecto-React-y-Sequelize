import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'
import { Card, Button } from 'antd';
import './Products.scss'

const { Meta } = Card;

const Products = () => {
    const {products, getProducts, addCart} = useContext(ProductContext)
    useEffect(()=>{
        getProducts()
    }, []);
    
  return (
    <div className="products-container">
        {products.map((product) => {
            return (
                <Card
                    key={product.id}
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={<img alt="img coche" src="https://d1gl66oyi6i593.cloudfront.net/wp-content/uploads/2020/07/venta-honda-nsx-type-r-1993.jpg" />}
                  >
                    <Meta title={product.name} description={"Precio: "+product.price + "€"} />
                    <Button type="primary" onClick={()=>addCart(product)}>Comprar</Button>
                </Card>
            )
        })}
    </div>
  )
}

export default Products