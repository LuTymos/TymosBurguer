

import { useContext } from 'react'
import Header from '../../components/Header/Header'
import LancheCard from '../../components/LancheCard/LancheCard'


import './Home.css'



function Home() {


const lanches = [{nome:'Lanchão', preco: 15.00, avaliacao:4.3},{nome:'Dogão', preco: 10.00, avaliacao:4.7}, {nome:'Pizza P', preco: 25.00, avaliacao:4.9}, {nome:'Coca-Cola', preco: 8.00, avaliacao:5.0},{nome:'Lanchão', preco: 15.00, avaliacao:4.3},{nome:'Lanchão', preco: 15.00, avaliacao:4.3}]




    return (
        
        <div className="Home">
         <Header/>
            <div className="categorias">
                <h3>Todas nossas opções:</h3>
                <div className="opcoes">
                    <div className="opcoes-wraper">
                        <span>Hamburguer</span>
                        <span>Hot Dog</span>
                        <span>Pizza</span>
                        <span>Bebidas</span>
                        <span>Doces</span>
                        <span>Salgados</span>
                    </div>
                </div>
            </div>
            <div className="popular">
                <h3>Mais escolhidos:</h3>
            <div className="itens">
            {lanches.length > 0 && lanches.map((lanche)=><LancheCard  {...lanche} />)}
            </div>
            </div>
            
        </div>
        
    )
}

export default Home