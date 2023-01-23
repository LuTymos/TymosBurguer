
import './ItemPedido.css'

function ItemPedido(props){

    console.log(props)

    const {nome, pedido, endereco, total, escolha} = props.pedido.info


    return(
        <div className="ItemPedido">
            
            <p>Nome Cliente {nome} </p>
            <p>Endereço: {endereco} </p>
            <p className="pedido"> Pedido Cliente: </p>
            <ul>
            {pedido.length > 0 && pedido.map((item)=><li>{item}</li>)}
            </ul> 
            <p>Total: R${total}</p>
            <a href="">Pedido entregue</a>
        </div>
    )
}

export default ItemPedido