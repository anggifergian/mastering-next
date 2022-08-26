import React from 'react'
import { useRouter } from 'next/router'

import { ChevronLeft, Container, Heading, Layout, Paragraph } from '../../components'

const index = () => {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <Layout hideNavbar hideFooter>
      <Container type='full' hidePadding>
        <div className='flex flex-col lg:flex-row h-full'>
          <div className='w-full lg:w-1/2 flex p-4 md:p-8 bg-gray-200'></div>
          <div className='w-full lg:w-1/2 flex p-4 md:p-8'>
            <div className='my-auto'>
              <button onClick={handleBack} className='pb-2 flex items-center space-x-2'>
                <ChevronLeft />
                <Paragraph>Back to products</Paragraph>
              </button>
              <Heading>products</Heading>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default index