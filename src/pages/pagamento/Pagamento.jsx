import { useContext, useState } from "react"
import ItensContext from "../../context/ItensContext"
import {  db } from '../../firebase'

import {addDoc, collection, DocumentReference} from 'firebase/firestore'

import './Pagamento.css'


function Pagamento() {


    const { sacola, setSacola } = useContext(ItensContext)

    let soma = 0;
    for (let i = 0; i < sacola.length; i++) {
        soma += sacola[i].preco;
    }

    

    function enviarPedido(e) {
        e.preventDefault()
        const nome = document.getElementById('nome').value
        const endereco = document.getElementById('endereco').value


        const opcoes = [];
        const els = document.getElementsByName('escolha');
        for (let i = 0; i < els.length; i++) {
            if (els[i].checked) {
                opcoes.push(els[i].value);
            }
        }

        const pedido = []
        sacola.map((itens)=> pedido.push(`${itens.quantidade}x ${itens.nome}`))
        

        addDoc(collection(db, "pedidos"), {
            nome: nome,
            endereco: endereco,
            escolha: opcoes[0],
            total: soma,
            pedido: pedido,
          });
          alert("enviado")

  
          document.getElementById('nome').value =""
          document.getElementById('endereco').value =""
          setSacola([])
          



    }


    return (
        <div className="Pagamento">
            <div className="Resumo">
                <h3>Resumo do pedido:</h3>
                {sacola.length > 0 && sacola.map((itens) => <p>{itens.quantidade}x {itens.nome} </p>)}

                <span className="total">Total: R${soma}</span>
            </div>
            <div className="informacoes_cliente">
                <form action="">
                    <input required type="text" name="" id="nome" placeholder="Seu nome" />
                    <textarea required name="" id="endereco" placeholder="Seu endereço"></textarea>
                    <div className="dinheiro"><input type="radio" value='dinheiro' name="escolha" id="dinheiro" /><label htmlFor="dinheiro">Dinheiro</label></div>
                    <div className="cartao"><input type="radio" value='cartão' name="escolha" id="cartao" /><label htmlFor="cartao">Cartão</label></div>


                    <button onClick={(e) => { enviarPedido(e) }}>Enviar pedido</button>
                    <span className="aviso">O pagamento deve ser efetuado apenas na entrega do produto</span>
                </form>
            </div>


        </div>
    )
}

export default Pagamento