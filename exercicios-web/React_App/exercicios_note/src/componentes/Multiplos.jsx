import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
// export default props => <h1>Múltiplos, Boa Tarde - {props.nome}!</h1>

export const BoaTarde = props => <h1>Múltiplos, Boa Tarde - {props.nome}!</h1>
export const BoaNoite = props => <h1>Múltiplos, Boa Noite - {props.nome}!</h1>

// eslint-disable-next-line import/no-anonymous-default-export
export default {BoaTarde, BoaNoite}