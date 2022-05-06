import React from 'react';
//import ReactDOM from 'react-dom';

// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Primeiro from './componentes/Primeiro'
// import Bdia from './componentes/BomDia'



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ReactDOM.render(< Primeiro />, document.getElementById('CursoReact'))
// ReactDOM.render(< Bdia nome="Maicon" idade='40' />, document.getElementById('CursoReact'))

// ReactDOM.render(< Multip nome="Maicon" />, document.getElementById('CursoReact'))
import {createRoot} from 'react-dom/client';
// import Multip from './componentes/Multiplos'
// import {BoaTarde,BoaNoite} from './componentes/Multiplos'
import Multip, {BoaNoite} from './componentes/Multiplos'
import Saudacao from './componentes/Saldacao';
import Pai from './componentes/Pai';
import Pai1 from './componentes/Pai1';
import Filho1 from './componentes/Filho1';

const Container = document.getElementById('CursoReact')
const root = createRoot(Container)

// root.render(<Multip nome="Maicon" />)
root.render(
<div>
    <Multip.BoaTarde nome="Maicon" />
    <BoaNoite nome="Fulano" />
</div>
)
root.render(<Saudacao nome="Beltrano" tipo="Good Morning" />)

root.render(
    <div>
        <Pai nome="Fulano" sobrenome="Silva" />
    </div>
)

root.render(
    <div>
        <Pai1 nome="Fulano" sobrenome="Silva" />
        <Filho1 nome = "Beltraninho" />
        {/* <Filho1 nome = "Gurgel" />
        <Filho1 nome = "Pedro" /> */}
    </div>
)

reportWebVitals();
