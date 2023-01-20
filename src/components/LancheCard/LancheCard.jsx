import {BsFillStarFill} from 'react-icons/bs'

import React from "react"

import './LancheCard.css'


function LancheCard(lanche) {
  // const {sacola, setSacola} = useContext(ItensContext)


    return (
      <div className="LancheCard">
        
            <p className="title">{lanche.nome}</p>
            <div className="img"></div>
            <span className="avaliation"><BsFillStarFill className='icon-avaliacao'/>{lanche.avaliacao}</span>
            <div className='card-footer'>
            <p className="price" >R${lanche.preco}</p>
            <button>+</button>
            </div>
      </div>
    )
  }
  
  export default LancheCard
