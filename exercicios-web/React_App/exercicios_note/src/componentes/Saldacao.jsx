import React, {Component} from "react";

export default class Saudacao extends Component {

    constructor (props){
        super(props)

        this.setTipo = this.setTipo.bind(this)
    }
    // state = {
    //     tipo: "Caro...",
    //     nome: "Joaquim"
    // }

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    setTipo(e){
        // console.log(e.target.value)
        // console.log(this.state.nome)        
        // this.props.tipo = e.target.value
        
        // let i = 1
        // setInterval(() => {
        //     this.setState({tipo: ++i})
        // }, 1000)

        this.setState({tipo: e.target.value})
    }
    setNome(e){
        this.setState({nome: e.target.value})
    }
    render(){
        // const  {tipo, nome} = this.props
        const  {tipo, nome} = this.state
        // console.log(this.state.nome)
        // console.log(this.state.tipo)

        return(
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr></hr>
                <input type="text" placeholder="Tipo..." Value={tipo} onChange={this.setTipo}/>
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/>
            </div>
                )
    }
}
