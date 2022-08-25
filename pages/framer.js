import React from 'react';
import Link from 'next/link';

import { Container, Image, Title, Layout, Paragraph } from "../components";

const framer = ({ items }) => {
  return (
    <Layout hideNavbar>
      <Container type='full'>
        <div className='flex w-full h-full'>
          <div className='m-auto'>
            <div className='flex flex-col md:flex-row items-center justify-center'>
              <div className='pb-8 md:pb-2 p-2 md:w-56'>
                <Title>Select a protein</Title>
              </div>
              <div className='mb-8 md:mb-0 flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 items-center'>
                {items.map(item => (
                  <Link
                    key={item.id}
                    href='/products/[id]'
                    as={`/products/${item.id}`}
                  >
                    <div className='mx-8 py-10 px-8 w-full md:w-80 rounded-lg bg-white text-center hover:shadow-lg transition-shadow ease-out duration-300 cursor-pointer'>
                      <Image
                        alt={item.name}
                        src={item.image}
                        width={180}
                        height={180}
                      />

                      <div className='pt-4 flex justify-between'>
                        <Paragraph>{item.name}</Paragraph>
                        <Paragraph bold>{item.price}</Paragraph>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

framer.getInitialProps = async () => {
  try {
    const url = 'http://my-json-server.typicode.com/wrongakram/demo/products'
    const res = await fetch(url, { method: 'GET' })
    let data = await res.json()

    data[0].image = data[1].image

    return {
      items: data
    }
  } catch (error) {
    console.log('error', error)
    return {
      hasError: true,
      error,
    }
  }
}

export default framer