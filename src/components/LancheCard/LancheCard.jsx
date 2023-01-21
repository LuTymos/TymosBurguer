import {BsFillStarFill} from 'react-icons/bs'

import React from "react"

import './LancheCard.css'


function LancheCard(lanche) {
  console.log(lanche)
  const {nome, preco, avaliacao, img} = lanche.lanche.info



    return (
      <div className="LancheCard">
        
            <p className="title">{nome}</p>
            <img src={img} className="img"></img>
            <span className="avaliation"><BsFillStarFill className='icon-avaliacao'/>{avaliacao}</span>
            <div className='card-footer'>
            <p className="price" >R${preco}</p>
            <button>+</button>
            </div>
      </div>
    )
  }
  
  export default LancheCard
