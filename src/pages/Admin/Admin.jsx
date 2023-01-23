import './Admin.css'
import { auth, db, storage } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import {addDoc, collection, onSnapshot} from 'firebase/firestore'
import{useState, useEffect} from 'react'
import ItemPedido from '../../components/ItemPedido/ItemPedido';


function Admin() {
  const[user, setUser] = useState(null);
  const [file, setFile] = useState(null)

  const [pedidos, setPedidos] = useState([])


  useEffect(() => {

    onSnapshot( collection(db, "pedidos"), (snapshot)=>{
      setPedidos(snapshot.docs.map(function(document){
        return {info:document.data()}
      }))

      console.log(pedidos)
    })

  }, [Admin])

// const{pedido, total, nome} = pedidos[0].info

  
  function login(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((auth)=>{
      const emailUser = auth.user.email
      alert(`logado como ${auth.user.email}`)
      setUser(emailUser)
    }).catch((error)=>{
      alert(error.message)
    })
   
    
  }

  function criarLanche(e){
    e.preventDefault()

    const nome = document.getElementById('nome').value
    const preco = document.getElementById('preco').value
    const avaliacao = document.getElementById('avaliacao').value


    const refUpload = ref(storage,`images/${file.name}`)

    uploadBytes(refUpload, file).then((snapshot)=>{
      getDownloadURL(refUpload).then((url)=>{
        addDoc(collection(db, "lanches"), {
          nome:nome,
          preco: preco,
          avaliacao: avaliacao,
          img: url
        });

        document.getElementById('nome').value =""
        document.getElementById('preco').value =""
        document.getElementById('avaliacao').value = ""
        
        setFile(null)
      }).catch((err)=>{
        alert(err.message)
      })
    })

    }

 

  return (
    <div className="admin">
      {user?
      <div className='painel'>
        <div className="adicionar">
          <form className='add-lanche' action="">
            <h3>Cadastrar Lanche:</h3>
            <label htmlFor="file"> Enviar foto</label>
            <input onChange={(e)=>setFile(e.target.files[0])} id='file' type="file"  />
            <input type="text" id='nome' placeholder='Nome do Lanche...' />
            <input type="number" id='preco'  placeholder='Preço...' />
            <input type="number" id='avaliacao' placeholder='Avaliação' />
            <input type="button" onClick={(e)=>{criarLanche(e)}} value="Cadastrar" />
          </form>
        </div>
        <h3>Pedidos:</h3>
        <div className="pedidos">

        {pedidos.length > 0 && pedidos.map((itens) => <ItemPedido pedido={itens}/>)}
          
          
        </div>
      </div>
      :
      <form className='login'>
        <h2>Faça login:</h2>
        <input type="email" id='email' placeholder='E-mail...' />
        <input type="password" id='password' placeholder='Senha...' />
        <input type="button" onClick={()=>{login()}} value="Logar" />
      </form>
      }
    </div>
  )
}

export default Admin