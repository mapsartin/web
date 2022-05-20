import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import Routes from './routes'
import Logo from '../components/template/logo'
import Nav from '../components/template/nav'
// import Home from '../components/home/home'
import Footer from '../components/template/footer'


const App = props =>
    // <HashRouter>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav icon="home" title="Início" user="users" />
            <Routes />
            {/* <Home /> */}
            <Footer />
        </div>
    </BrowserRouter>
    // </HashRouter>
    



export default App
