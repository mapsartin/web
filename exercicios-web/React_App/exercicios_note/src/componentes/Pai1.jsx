import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
<div>
    <h1>{props.nome} {props.sobrenome} </h1>
    <h2>Filhos : </h2>
    <ul>
        {
            
            React.Children.map(props.Children, child => {
                return React.cloneElement(child, {
                    ...props, ...child.props
                })
            })
            
        }
    </ul>
</div>



// React.cloneElement(...props, ...props.children, ...props.children.props)
// {props.children}