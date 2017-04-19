import React, {PropTypes} from 'react'
import { Spinner } from '../../shared'


const Workshop = ({workshop}) =>
    <a
        className='workshop-item'
        href={'/workshop/' + workshop.slug }
    >
        <div className='workshop-item-degrade'>
            <div className='workshop-item-name'>
                {workshop.name}
            </div>
        </div>
    </a>


const Workshops = ({workshops}) =>
    <div className='workshops'>
        {workshops.map((workshop, i) =>
            <Workshop key={i} workshop={workshop} />
        )}
    </div>


const WorkshopsWrapper = ({workshops, fetching}) =>
    fetching 
        ? <Spinner />
        : <Workshops workshops={workshops} />


WorkshopsWrapper.propTypes = {
    workshops: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired
}


export default WorkshopsWrapper
