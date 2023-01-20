
import ItenCarrinho from "../../components/itenCarrinho/ItenCarrinho"

import './sacola.css'

const sacola = [
    { nome: 'Lanchão', preco: 15.00 },
    { nome: 'Dogão', preco: 10.00 },
    { nome: 'Pizza P', preco: 25.00 },
    { nome: 'Coca-Cola', preco: 8.00 },
    { nome: 'Lanchão', preco: 15.00 },
    { nome: 'Lanchão', preco: 15.00 }
]



function Sacola() {

    var soma = 0;
for(var i = 0; i < sacola.length; i++) {
    soma += sacola[i].preco;
    console.log(soma)
}
    return (
        <div className="Sacola">
            <p className="title">Sacola:</p>
            {sacola.length > 0 && sacola.map((itens) => <ItenCarrinho  {...itens} />)}

            <span className="total">Total: R${soma}</span>
            <button className="btn-prosseguir">Prosseguir para o pagamento</button>
        </div>
    )
}

export default Sacola