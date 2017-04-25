import React, {PropTypes} from 'react'


const Workshop = ({workshop}) =>
    <a
        className='workshop-item'
        href={'/workshop/' + workshop.slug }
        style={{'backgroundImage': 'url(/images/' + workshop.image + '.jpg)'}}
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


Workshops.propTypes = {
    workshops: PropTypes.array.isRequired,
}


export default Workshops
