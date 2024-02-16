
import { useState } from 'react';
import './App.css'
import Cards from './Components/Card/Cards';
import Cart from './Components/Cart/Cart';

function App() {

  const [creditRemain, setCreditRemain] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelect = (price, credit) => {
    console.log(price, credit);
    const creditDue = creditRemain - credit;
    const creditSum = totalCredit + credit;
    const priceSum = price + totalPrice;
    if (creditDue < 0){
      alert('Credit limit exceed')
    } else{
      setCreditRemain(creditDue);
      setTotalCredit(creditSum);
      setTotalPrice(priceSum);
    }
  }
 

  return (
    <>
     <div className='mb-6'>
      <h1 className='text-xl font-bold'>Course Registration</h1>
     </div>
     <div className='grid grid-cols-12 gap-4'>
    <Cards handleSelect = {handleSelect}></Cards>
     <Cart dueCredit = {creditRemain} creditSum = {totalCredit} priceSum = {totalPrice}></Cart>
     </div>

    </>
  )
}

export default App
