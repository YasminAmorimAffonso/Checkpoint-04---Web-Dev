import { useState } from 'react'
import { Link } from 'react-router-dom'
import './cabecalho.css'

function Cabecalho() {

    return (
        <>

            <div className="tudo-cabecalho">

                <img src="../../public/assets/imgs/logo.png" alt="logo" id='logo' />

                <div className="buttons">

                    <Link to="/" className='button'>Home</Link>

                    <Link to="/loja" className='button'>Loja</Link>

                    <div className='carrinhos'>

                        <Link to="/carrinho" className='button-carrinho'><img src="assets/imgs/carrinhoclaro.png" alt="carrinho" className='carrinho-claro' /><img src="/assets/imgs/carrinhoescuro.png" alt="carrinho" className='carrinho-escuro' /></Link>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Cabecalho
