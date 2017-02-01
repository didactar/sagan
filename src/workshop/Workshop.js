import React, { PropTypes } from 'react'


const Workshop = ({workshop}) =>
    <div>
        <h1>{workshop.name}</h1>
        <p>{workshop.description}</p>
    </div>


const WorkshopWrapper = ({workshop, fetching}) =>
    <div>
        {fetching
            ? <h2>Loading...</h2>
            : <Workshop workshop={workshop} />}
    </div>


WorkshopWrapper.propTypes = {
    workshop: PropTypes.object.isRequired,
    fetching: PropTypes.bool.isRequired
}


export default WorkshopWrapper
