import './itemCarrinho.css'

import {FiTrash2} from 'react-icons/fi'
import { useContext } from 'react'
import ItensContext from '../../context/ItensContext'

function ItenCarrinho(itens){


    const {sacola, setSacola} = useContext(ItensContext)

    function excluir(id){
        setSacola(sacola.filter(item => item.id != id))
    }

    return(
        <div className="itenCarrinho">
            <img src={itens.img} alt="" />
            <div className='infos'>
            <span className="name">{itens.nome}</span><br/>
            <span className='quantidadeCarrinho'>quant: {itens.quantidade}</span>
            <span className="price">R${itens.preco}</span>
            </div>
            <FiTrash2 className='trash-icon' onClick={()=>{excluir(itens.id)}}/>
        </div>
    )
}

export default ItenCarrinho