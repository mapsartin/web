import React from 'react'
import { childrenWithProps } from '../utils/utils'









// function childrenwProps(props){
//     return React.cloneElement(props.children, {
//     ...props, ...props.children.props
// })
// }
// childrenwProps(props)


// const fetchSomething = () => {};
// export default fetchSomething;

//  export default props => 
const Pai = (props) => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
                {
                    childrenWithProps(props)
                }
        </ul>
    </div>

export default Pai
// {childrenWithProps(props)}

