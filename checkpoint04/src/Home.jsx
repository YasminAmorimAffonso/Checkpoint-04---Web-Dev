import { useState } from 'react'
import Cabecalho from './components/cabecalho'
import Rodape from './components/rodape'
import './home.css'

function Home() {


  return (
    <>
      <div className='body-home'>

        <Cabecalho />

        <div className='content-home'>

          <div className='secao1-home'>

            <img src="../../public/assets/imgs/circulo.png" alt="" />

            <h1>Sustainable Products</h1>

            <h3>Por um mundo verde mais acessível</h3>

          </div>

        </div>

        <Rodape />

      </div>
    </>
  )
}

export default Home
