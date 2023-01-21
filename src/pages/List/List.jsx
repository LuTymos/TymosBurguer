import Header from "../../components/Header/Header"
import LancheCard from "../../components/LancheCard/LancheCard"


import './List.css'

function List(props) {
    const lanches = props.lanches


    return (
        <div className="List">
            <Header />
            <h3>Todas nossas opções:</h3>
            <h5>Filtros: </h5>
            <div className="itens">
            {lanches.length > 0 && lanches.map((lanche)=><LancheCard  lanche={lanche} />)}
            </div>
        </div>
    )
}

export default List