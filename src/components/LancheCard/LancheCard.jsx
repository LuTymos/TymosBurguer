import {BsFillStarFill} from 'react-icons/bs'

import React, { useContext, useState } from "react"

import './LancheCard.css'
import ItensContext, { ItenStore } from '../../context/ItensContext'



function LancheCard(lanche) {
  let [quantidade, setQuantidade]= useState(0)

  const {nome, preco, avaliacao, img} = lanche.lanche.info

  const {sacola, setSacola} = useContext(ItensContext)


  function diminuir(){

    if(quantidade <= 0){
      setQuantidade(0)
    }else{
      setQuantidade(quantidade - 1)
    }
    
  }

  function addCart(){
    if(quantidade == 0){
      alert("adicione uma quantidade")
    }else{
      const cartItem = {
        nome:nome,
        preco:preco * quantidade,
        img:img,
        quantidade: quantidade,
        id: Math.floor(Math.random() + sacola.length * 10)
      }
      const cart = [...sacola, cartItem]
      setSacola(cart)
      alert(`adicionado ${quantidade} ${nome} ao carrinho`)
      setQuantidade(0)
    }
    
  }

    return (
      <div className="LancheCard">
        
            <p className="title">{nome}</p>
            <img src={img} className="img"></img>
            {/* <span>{quantidade}</span> */}
            <span className="avaliation"><BsFillStarFill className='icon-avaliacao'/>{avaliacao}</span>
            <p className="price" >R${preco}</p>
            
            <div className="quantidade">
            <button onClick={()=>{diminuir() }}>-</button>
            <span>{quantidade}</span>
            <button onClick={()=>{setQuantidade(quantidade + 1) }}>+</button>
            </div>
            <button className='add' onClick={()=>{addCart() }}>Adicionar a sacola</button>
      </div>
    )
  }
  
  export default LancheCard
