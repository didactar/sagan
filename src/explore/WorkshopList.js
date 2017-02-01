import React, {PropTypes} from 'react'


const WorkshopItem = ({workshop}) =>
  <li>
    <a href={'workshop/' + workshop.slug }>
        {workshop.name}
    </a>
  </li>


const WorkshopList = ({workshops}) =>
  <ul>
    {workshops.map((workshop, i) =>
      <WorkshopItem key={i} workshop={workshop} />
    )}
  </ul>


const ListWrapper = ({workshops, fetching}) =>
    <div>
        {workshops.length === 0
            ? (fetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
            : <WorkshopList workshops={workshops} />
        }
    </div>


ListWrapper.propTypes = {
    workshops: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired
}


export default ListWrapper
