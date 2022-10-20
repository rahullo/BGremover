import './landingPage.component.css'
import { Outlet } from 'react-router'

function FrontPage(){

    const adam = require('../../img/adam.jpg')

    return(
        <div className='frontpage'>
            <Outlet/>
            <div className="cards">
                <div className="card1"></div>
                <img className='arrow' src="" alt="" />
                <div className="card2"></div>
            </div>
                <button className="button bounce-top">Start</button>
        </div>
    )
}

export default FrontPage