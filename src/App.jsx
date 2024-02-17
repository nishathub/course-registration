
import { useState } from 'react';
import './App.css'
import Cards from './Components/Card/Cards';
import Cart from './Components/Cart/Cart';

let newSelection = [];
function App() {

  const [creditRemain, setCreditRemain] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selection, setSelection] = useState([]);

  const handleSelect = (price, credit, title) => {
    console.log(price, credit, title);
    const creditDue = creditRemain - credit;
    const creditSum = totalCredit + credit;
    const priceSum = price + totalPrice;
    if(!newSelection.includes(title)){
      newSelection.push(title);
      setSelection(newSelection);
      if (creditDue < 0){
        alert('Credit limit exceed')
      } else{
        setCreditRemain(creditDue);
        setTotalCredit(creditSum);
        setTotalPrice(priceSum);
      }
    }
  }
 

  return (
    <>
     <div className='mb-6'>
      <h1 className='text-3xl font-bold'>Course Registration</h1>
     </div>
     <div className='grid sm:grid-cols-12 grid-cols-1 gap-4'>
    <Cards handleSelect = {handleSelect}></Cards>
     <Cart dueCredit = {creditRemain} creditSum = {totalCredit} priceSum = {totalPrice} selection = {selection}></Cart>
     </div>

    </>
  )
}

export default App
