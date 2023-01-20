import './itemCarrinho.css'

import {FiTrash2} from 'react-icons/fi'

function ItenCarrinho(itens){
    return(
        <div className="itenCarrinho">
            <div className="img"></div>
            <div className='infos'>
            <span className="name">{itens.nome}</span><br/>
            <span className="price">R${itens.preco}</span>
            </div>
            <FiTrash2 className='trash-icon'/>
        </div>
    )
}

export default ItenCarrinho