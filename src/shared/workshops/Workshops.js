import React, {PropTypes} from 'react'
import Loading from '../loading/Loading'


const Workshop = ({workshop}) =>
    <a 
        href={'workshop/' + workshop.slug }
        className='workshop-item'
    >
        {workshop.name}
    </a>


const Workshops = ({workshops}) =>
    <div className='workshops'>
        {workshops.map((workshop, i) =>
            <Workshop key={i} workshop={workshop} />
        )}
    </div>


const ListWrapper = ({workshops, fetching}) =>
    <div className='main-column'>
        {workshops.length === 0
            ? (fetching ? <Loading /> : <h2>Empty.</h2>)
            : <Workshops workshops={workshops} />
        }
    </div>


ListWrapper.propTypes = {
    workshops: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired
}


export default ListWrapper
