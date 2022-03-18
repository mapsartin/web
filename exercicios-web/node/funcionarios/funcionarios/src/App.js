import logo from './logo.svg';
import './App.css';

// function Pesq() {
// const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
// const axios = require('axios')

// const chineses = f => f.pais === 'China'
// const mulheres = f => f.genero === 'F'
// const menorSalario = (func, funcAtual) => {
//     return func.salario < funcAtual.salario ? func : funcAtual
// }

// axios.get(url).then(response => {
//     const funcionarios = response.data
//     // console.log(funcionarios)

//     // mulher chinesa com menor salário?
//     const func = funcionarios
//         .filter(chineses)
//         .filter(mulheres)
//         .reduce(menorSalario)

//     console.log(func)
// })
// }


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          Pesq()
          
        </a>
      </header>
    </div>
  );
}

export default App;
