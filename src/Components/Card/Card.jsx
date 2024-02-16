import PropTypes from 'prop-types';

const Card = ({data, handleSelect}) => {
   const {image, title, description, price, credit_hour} = data;
    return (
        <div className='flex flex-col justify-between gap-4 text-left p-4 bg-slate-400 rounded-lg'>
            <div>
                <img className='w-full' src= {image} alt="course_image" />
            </div>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className='flex justify-between'>
                <div className='flex gap-4'>
                    <p>icon</p>
                    <p>Price : {price}</p>
                </div>
                <div className='flex gap-4'>
                    <p>icon</p>
                    <p>Credit : {credit_hour}hr</p>
                </div>
            </div>
            <button onClick={() => handleSelect(price, credit_hour, title)} className='bg-blue-500 hover:bg-blue-700 rounded-md text-white py-1'>Select</button>
        </div>
    );
};

Card.propTypes = {
    data: PropTypes.object,
    handleSelect: PropTypes.func
}

export default Card;