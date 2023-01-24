
import LancheCard from "../../components/LancheCard/LancheCard"
import { HiSearch } from 'react-icons/hi'
import { doc, onSnapshot, collection, where, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase'
import './Header.css'
import './List.css'
import { useState } from "react"

function List(props) {
    const lanches = props.lanches

    const [pesquisaLanches, setPesquisaLanches] = useState([])
    console.log(lanches)
    const citiesRef = collection(db, "lanches")

    function pesquisa(e) {
        e.preventDefault()
        const que = e.target.value

        // onSnapshot(collection(db, "lanches"), (snapshot) => {
        //     const q = query(citiesRef, where("nome", "==", `${que}`))
        //     console.log(getDocs(q))

        // })

        onSnapshot(collection(db, "lanches"), where("nome", "==", `${que}`), (snapshot) => {
            setPesquisaLanches(snapshot.docs.map(function (document) {
                return { info: document.data() }
            }))
            console.log(pesquisaLanches)
        })



        // lanches.filter((lanche => lanche.info.nome == query)).map((lanche)=>setPesquisaLanches(lanche))
        // console.log(lanches.filter((lanche => lanche.nome == query)))

        // console.log(pesquisaLanches)

    }


    return (
        <div className="List">
            <div className="Header">
                <form action="" className='search'>
                    <HiSearch className='icon-search-bar' />
                    <input className='search-bar' onChange={(e) => { pesquisa(e) }} type="text" placeholder="Pesquise algo..." />
                </form>
            </div>

            <h3>Todas nossas opções:</h3>
            <h5>Filtros: </h5>
            <div className="itens">
                {lanches.length > 0 && lanches.map((lanche) => <LancheCard lanche={lanche} />)}
            </div>
        </div>
    )
}

export default List