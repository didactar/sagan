import React, {PropTypes} from 'react'
import { Spinner } from '../../shared'


const WorkshopText = ({workshop}) =>
    <div className='workshop-item-text'>
        <div className='workshop-item-text-content'>
            <div className='workshop-item-text-name'>
                {workshop.name}
            </div>
            <div className='workshop-item-text-next'>
                20 February 2017
            </div>
        </div>
    </div>


const Workshop = ({workshop}) =>
    <a
        className='workshop-item'
        href={'/workshop/' + workshop.slug }
    >
        <WorkshopText workshop={workshop} />
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
