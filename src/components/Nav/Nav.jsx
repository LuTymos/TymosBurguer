import { HiShoppingBag, HiHome} from 'react-icons/hi'
import {CgMenuBoxed} from 'react-icons/cg'
import {RiAdminFill} from 'react-icons/ri'
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
            <Link to="/admin" className='link'><RiAdminFill className={`icon ${iactive === 'Admin' ? 'Active' : ''}`} onClick={()=>{setActive('Admin')}}/></Link>
        </div>
    )
}

export default Nav