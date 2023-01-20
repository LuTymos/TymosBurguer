import { HiShoppingBag, HiHome} from 'react-icons/hi'
import {CgMenuBoxed} from 'react-icons/cg'
import {BsGearFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import './Nav.css'
import { useState } from 'react'

function Nav(){
    const [iactive, setActive] = useState('Home')


    return(
        <div className="Nav">
            <Link className='link' to='/'><HiHome className={`icon ${iactive === 'Home' ? 'Active' : ''}`}  onClick={()=>{setActive('Home')}} /></Link>
            <Link className='link' to="/list"><CgMenuBoxed className={`icon ${iactive === 'Menu' ? 'Active' : ''}`} onClick={()=>{setActive('Menu')}}/></Link>
            <Link to="/sacola" className='link'><HiShoppingBag className={`icon ${iactive === 'Bag' ? 'Active' : ''}`} onClick={()=>{setActive('Bag')}}/></Link>
        </div>
    )
}

export default Nav