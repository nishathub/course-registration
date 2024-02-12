import PropTypes from 'prop-types';

const Card = ({data}) => {
   const {image, title, description, price, credit_hour} = data;
    console.log(data);
    return (
        <div className='flex flex-col gap-4 text-left w-auto'>
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
            <button>Select</button>
        </div>
    );
};

Card.propTypes = {
    data: PropTypes.object
}

export default Card;