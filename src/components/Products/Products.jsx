import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'

const Products = () => {
    const {products, getProducts} = useContext(ProductContext)
    useEffect(()=>{
        getProducts()
    }, []);
    {console.log(products)}    

  return (
    <div className="products-container">
        {products.map((product) => {
            return (
                <p key={product.id}>{product.name}</p>
            )
        })}
    </div>
  )
}

export default Products