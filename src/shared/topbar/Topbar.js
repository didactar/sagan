import React, { PropTypes } from 'react'
import Menu from './menu'
import Bar from './bar'


const Topbar = props =>
    <div className='topbar'>
        <Bar {...props} />
        <Menu {...props} />
    </div>


Topbar.propTypes = {
    showMenu: PropTypes.func.isRequired,
    menuIsVisible: PropTypes.bool.isRequired,
    menuMouseUp: PropTypes.func.isRequired,
    menuMouseDown: PropTypes.func.isRequired,
}


export default Topbar
