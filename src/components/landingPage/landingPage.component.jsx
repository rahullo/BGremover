import './landingPage.component.css'
import { Outlet } from 'react-router'

function FrontPage(){

    const adam = require('../../img/adam.jpg')

    return(
        <div className='frontpage'>
            <Outlet/>
            <h1 className="MyName">
                My Name Rahul
            </h1>
            <img className='image' src={adam} alt=""/>
        </div>
    )
}

export default FrontPage