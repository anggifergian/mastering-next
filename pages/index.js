import Layout from '../components/Layout'

const cards = [
  { id: 1, name: 'Samsung Galaxy J5 Prime', price: 10_000 },
  { id: 2, name: 'Iphone Xr', price: 15_600 },
  { id: 3, name: 'OnePlus 8', price: 8_800 },
]

export default function Home() {
  return (
    <div id='main'>
      <Layout>
        {cards.map(card => (
          <div key={card.id} className="flex-1 border border-opacity-50 shadow-lg hover:shadow transition duration-300 ease-out bg-white px-6 py-4 mb-6 text-white rounded-lg">
            <div className='font-semibold text-md text-gray-700'>{card.name}</div>
            <p className='font-normal text-sm text-gray-500'>Rp.{card.price}</p>
          </div>
        ))}
      </Layout>
    </div>
  )
}
