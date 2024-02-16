import PropTypes from 'prop-types';


const Cart = ({dueCredit, creditSum, priceSum}) => {
    return (
        <div className="col-span-3 border h-fit p-4 bg-slate-400 rounded-lg">
            <h4 className="py-4 border-b">Credit Hour Remaining : {dueCredit}</h4>
            <div className="py-4 border-b">
                <h2>Course Name</h2>
            </div>
            <ol className="py-4 border-b">

            </ol>
            <h4 className="py-4 border-b">Total Credit Hour : {creditSum}</h4>
            <h4 className="pt-4">Total Price : {priceSum} USD</h4>
        </div>
    );
};

Cart.propTypes = {
    dueCredit: PropTypes.number,
    creditSum: PropTypes.number,
    priceSum: PropTypes.number,
    
}

export default Cart;