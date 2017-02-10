import React, {PropTypes} from 'react'
import { Spinner } from '../../shared'


const Workshop = ({workshop}) =>
    <div
        className='workshop-item'
        style={{'backgroundImage': 'url(/images/' + workshop.image + '.jpg)'}}
    >
        <a 
            href={'/workshop/' + workshop.slug }
            className='workshop-item-link'
        >
            <span className='workshop-item-name'>
                {workshop.name}
            </span>
        </a>
    </div>


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
