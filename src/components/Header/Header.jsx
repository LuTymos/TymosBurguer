import React from 'react'
import {HiMenuAlt2, HiSearch} from 'react-icons/hi'
import {AiOutlineUser} from 'react-icons/ai'

import './Header.css'

function Header(){
    return(
        <div className="Header">
            <form action="" className='search'>
            <HiSearch className='icon-search-bar'/>
            <input className='search-bar' type="text" placeholder="Pesquise algo..."/>
            </form>
        </div>
    )
}

export default Header