import React from 'react';
import { Typography, Image  } from 'antd';
import './Home.scss'

const { Text, Paragraph, Title } = Typography;

const Home = () => {
  return (
    <div className='container'>
           <Title className='title'>JoanCars</Title>
            <Text className='text'>
                Esta es la MEJOR página para compra tu futuro coche, con los mejores coches y varios años de garantía.
            </Text>

        <Image
            width={800}
            src="https://www.autopista.es/uploads/s1/11/61/03/74/todos-los-nuevos-coches-deportivos-que-llegan-en-2023_7_1200x690.jpeg"
        />

    </div>
  )
}

export default Home