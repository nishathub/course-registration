
import './App.css'
import Cards from './Components/Card/Cards';
import Cart from './Components/Cart/Cart';

function App() {

  return (
    <>
     <div className='mb-6'>
      <h1 className='text-xl font-bold'>Course Registration</h1>
     </div>
     <div className='grid grid-cols-12 gap-4'>
     <Cards></Cards>
     <Cart></Cart>
     </div>

    </>
  )
}

export default App
