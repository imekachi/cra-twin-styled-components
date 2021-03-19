// eslint-disable-next-line
import tw from 'twin.macro'
import Navbar from './Navbar'
import ProductCard from './ProductCard'

function App() {
  return (
    <div>
      <Navbar />
      <div tw="m-6 space-y-8">
        <section tw="">
          <ProductCard />
        </section>
      </div>
    </div>
  )
}

export default App
