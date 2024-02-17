import PropTypes from 'prop-types';


const Cart = ({dueCredit, creditSum, priceSum, selection}) => {
    return (
        <div className=" col-span-5 lg:col-span-4 xl:col-span-3 h-fit p-4 bg-sky-200 rounded-lg text-left">
            <h4 className="py-4 border-b border-slate-400 text-blue-800 text-md font-bold">Credit Hour Remaining : {dueCredit}</h4>
            <div className="py-4 border-b border-slate-400">
                <h2 className='text-xl font-bold'>Course Name</h2>
            </div>
            <ol className="py-4 border-b border-slate-400">
                {selection.map((title, id) => <li className='mb-1' key={title}>{id+1} {title}</li>)}
            </ol>
            <h4 className="py-4 border-b border-slate-400 font-semibold">Total Credit Hour : {creditSum}</h4>
            <h4 className="pt-4 font-semibold">Total Price : {priceSum} USD</h4>
        </div>
    );
};

Cart.propTypes = {
    dueCredit: PropTypes.number,
    creditSum: PropTypes.number,
    priceSum: PropTypes.number,
    selection: PropTypes.array,
    
}

export default Cart;