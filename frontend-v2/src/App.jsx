import './App.css'
import axios from 'axios';


function App() {

  //Exemplo de uso do fetch()
  async function getData(){
    const requisicao = await fetch("http://localhost:3000/alunos");
    const alunosDoBanco = await requisicao.json();
    console.log(alunosDoBanco)
  }
  //getData();

  //Exemlo com Axios
  async function getDataAxios(){
      const dadosUsandoAxios = await axios.get("http://localhost:3000/alunos");
      console.log(dadosUsandoAxios)
  }
  
  getDataAxios()

  return(
    <h1>Gerenciamento de Escolas</h1>
  )
}

export default App
