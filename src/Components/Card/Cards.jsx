import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Card from './Card';


const Cards = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
     fetch('course-data.json')
     .then(res => res.json())
     .then(data => setCourses(data))
    }, [])

    return (
        <div className='col-span-9'>
        <div className='grid grid-cols-3 gap-4'> 
            {courses.map((course, id) => <Card key={id} data = {course}></Card>)}
        </div>
        </div>
    );
};

Cards.propTypes = {
    data: PropTypes.object
}

export default Cards;