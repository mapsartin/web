// import React from 'react'


// export default () => <h1>Bom dia Siclano !</h1>

// ----------div
// eslint-disable-next-line import/no-anonymous-default-export
// export default props => 
// <div> 
//     <h1>Bom dia {props.nome} = {props.idade} !</h1>
//     <h2>Até breve</h2>
// </div>


// ----------Array
// eslint-disable-next-line import/no-anonymous-default-export
export default props => [
    <h1 key='h1'>Bom dia {props.nome} = {props.idade} !</h1>,
    <h2 key='h2'>Até breve</h2>
]
// ----------
// eslint-disable-next-line import/no-anonymous-default-export
// export default props => 
// <React.Fragment> 
//     <h1>Bom dia {props.nome} = {props.idade} !</h1>
//     <h2>Até breve</h2>
// </React.Fragment>


// ----------React

// import React, {Fragment} from 'react'
// // eslint-disable-next-line import/no-anonymous-default-export
// export default props => 
// <Fragment> 
//     <h1>Bom dia {props.nome} = {props.idade} !</h1>
//     <h2>Até breve</h2>
// </Fragment>