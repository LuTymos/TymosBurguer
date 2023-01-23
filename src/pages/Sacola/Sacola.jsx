
import { useContext } from "react";
import ItenCarrinho from "../../components/itenCarrinho/ItenCarrinho"
import ItensContext from "../../context/ItensContext";

import './sacola.css'


function Sacola() {
    const {sacola, setSacola} = useContext(ItensContext)


var soma = 0;
for(var i = 0; i < sacola.length; i++) {
    soma += sacola[i].preco;
}
console.log(sacola)
    return (
        <div className="Sacola">
            <p className="title">Sacola:</p>
            {sacola.length == 0 && <h2>Adicione algum Item para continuar...</h2>}
            {sacola.length > 0 && sacola.map((itens) => <ItenCarrinho  {...itens} />)}

            {sacola.length > 0 && <span className="total">Total: R${soma}</span>}
            {sacola.length > 0 && <Link to='/pagamento'><button className="btn-prosseguir">Prosseguir para o pagamento</button></Link>}
        </div>
    )
}

export default Sacola