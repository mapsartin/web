import React from 'react';
import Main from '../template/main'

const Home = props =>
    <Main icon="home" title="Início" subtitle="Segundo Projeto do capitulo de React">
        <div className='display-4'>
            Bem Vindo!!
        </div>
        <hr />
        <p className="mb-0">
            Sistema para exemplificar um CRUD em React. (App)
        </p>

    </Main>

export default Home