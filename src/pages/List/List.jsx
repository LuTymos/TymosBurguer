import Header from "../../components/Header/Header"
import LancheCard from "../../components/LancheCard/LancheCard"


import './List.css'

function List() {
    const lanches = [{ nome: 'Lanchão', preco: 15.00, avaliacao: 4.3 }, { nome: 'Dogão', preco: 10.00, avaliacao: 4.7 }, { nome: 'Pizza P', preco: 25.00, avaliacao: 4.9 }, { nome: 'Coca-Cola', preco: 8.00, avaliacao: 5.0 }, { nome: 'Lanchão', preco: 15.00, avaliacao: 4.3 }, { nome: 'Lanchão', preco: 15.00, avaliacao: 4.3 }]


    return (
        <div className="List">
            <Header />
            <h3>Todas nossas opções:</h3>
            <h5>Filtros: </h5>
            <div className="itens">
                {lanches.length > 0 && lanches.map((lanche) => <LancheCard  {...lanche} />)}
            </div>
        </div>
    )
}

export default List