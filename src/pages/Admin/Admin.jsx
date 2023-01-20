import './Admin.css'
import { auth, db, storage } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import{useState} from 'react'


function Admin() {
  const[user, setUser] = useState(null);
  const [file, setFile] = useState(null)
  
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

  // function criarPost(){


  //   const nome = (document.getElementById('nome') as HTMLSelectElement)).value
  //   const preco = (document.getElementById('preco')as HTMLSelectElement)).value
  //   const avaliacao = (document.getElementById('avaliacao') as HTMLSelectElement)).value


  //   const upload = storage.ref(`images/${file.name}`).put(file)

  //   upload.on("state_changed", function(snapshot){
  //     const progress = Math.round(snapshot.bytesTransferred/snapshot.totalBytes) * 100
  //     setProgress(progress)
  //     },function(error){
        
  //     },function(){

  //       storage.ref("images").child(file.name).getDownloadURL()
  //       .then(function(url){
  //         db.collection('posts').add({
  //           titulo: titulo,
  //           descricao:descricao,
  //           image: url,
  //           username: props.user,
  //           times: firebase.firestore.FieldValue.serverTimestamp()
  //         })

  //         setProgress(0)
  //         setFile(null)

  //         alert("Postado!")
  //         document.getElementById('upload').reset()
  //       })

  //     })
  // }
 

  return (
    <div className="admin">
      {user?
      <div className='painel'>
        <div className="adicionar">
          <form className='add-lanche' action="">
            <h3>Cadastrar Lanche:</h3>
            <label htmlFor="file"> Enviar foto</label>
            <input onChange={()=>setFile(target.files[0])} id='file' type="file"  />
            <input type="text" id='nome' placeholder='Nome do Lanche...' />
            <input type="number" id='preco'  placeholder='Preço...' />
            <input type="number" id='avalicao' placeholder='Avaliação' />
            <input type="button" value="Cadastrar" />
          </form>
        </div>
        <h3>Pedidos:</h3>
        <div className="pedidos">
          
          <div className="pedidoIten">
            <p> Nome cliente </p>
            <p> Endereço Cliente </p>
            <p> Pedido Cliente: Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptas ratione unde beatae. Culpa, deleniti. </p>
            <a href="">Pedido entregue</a>
          </div>
          <div className="pedidoIten">
            <p> Nome cliente </p>
            <p> Endereço Cliente </p>
            <p> Pedido Cliente: Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptas ratione unde beatae. Culpa, deleniti. </p>
            <a href="">Pedido entregue</a>
          </div>
          <div className="pedidoIten">
            <p> Nome cliente </p>
            <p> Endereço Cliente </p>
            <p> Pedido Cliente: Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptas ratione unde beatae. Culpa, deleniti. </p>
            <a href="">Pedido entregue</a>
          </div>
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