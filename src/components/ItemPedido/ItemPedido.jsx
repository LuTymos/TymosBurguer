
import { db } from '../../firebase';
import { collection, doc, deleteDoc } from 'firebase/firestore';
import './ItemPedido.css'

function ItemPedido(props){


    const {nome, pedido, endereco, total, escolha} = props.pedido.info
    const {id} = props.pedido

    function deletar(id){
        deleteDoc(doc(db, "pedidos", `${id}`))
    }

    return(
        <div className="ItemPedido">
            
            <p>Nome Cliente {nome} </p>
            <p>Endereço: {endereco} </p>
            <p className="pedido"> Pedido Cliente: </p>
            <ul>
            {pedido.length > 0 && pedido.map((item)=><li>{item}</li>)}
            </ul> 
            <p>Total: R${total}</p>
            <button onClick={()=>{deletar(id)}}>Pedido entregue</button>
        </div>
    )
}

export default ItemPedido