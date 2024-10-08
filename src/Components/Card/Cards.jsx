import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Card from './Card';


const Cards = ({handleSelect}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
     fetch('course-data.json')
     .then(res => res.json())
     .then(data => setCourses(data))
    }, [])

    return (
        <div className='col-span-7 lg:col-span-8 xl:col-span-9'>
        <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4'> 
            {courses.map((course, id) => <Card key={id} data = {course} handleSelect = {handleSelect}></Card>)}
        </div>
        </div>
    );
};

Cards.propTypes = {
    data: PropTypes.object,
    handleSelect: PropTypes.func,
}

export default Cards;