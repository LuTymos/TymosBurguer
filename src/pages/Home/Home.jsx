

import { useContext } from 'react'
import Header from '../../components/Header/Header'
import LancheCard from '../../components/LancheCard/LancheCard'


import './Home.css'



function Home(props) {



    const lanches = props.lanches
    console.log(lanches)




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
            {lanches.length > 0 && lanches.map((lanche)=><LancheCard  lanche={lanche} />)}
            </div>
            </div>
            
        </div>
        
    )
}

export default Home