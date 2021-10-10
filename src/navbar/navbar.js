import React from 'react'
import{Link} from 'react-router-dom'
import '../style/nav/navbar.scss'


export const Navbar = () => {
    return (
        <div className={'nav'} >
            <Link className={'nav__link'} to='/FiveClock'>FiveClock</Link> 
           <Link className={'nav__link'} to='/calculater'>Calculater</Link> 
             <Link className={'nav__link'} to='/Drum'>Drum</Link>    
            <Link className={'nav__link'} to='/MarkDown'>MarkDown</Link>
             <Link className={'nav__link'} to='/'>Quote</Link><br></br>
        </div>
    )
}
export default Navbar