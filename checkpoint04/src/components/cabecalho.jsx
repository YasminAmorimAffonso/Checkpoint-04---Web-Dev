import { useState } from 'react'

import './cabecalho.css'

function Cabecalho() {

    return (
        <>

            <div className="tudo-cabecalho">

                <img src="../../public/assets/imgs/logo.png" alt="logo" id='logo' />

                <div class="buttons">

                    <a href="../Home.jsx" className='button'>Home</a>

                    <a href="" className='button'>Loja</a>

                    <div className='carrinhos'>

                        <a href=""><img src="../../public/assets/imgs/carrinhoclaro.png" alt="carrinho" className='carrinho-claro' /><img src="../../public/assets/imgs/carrinhoescuro.png" alt="carrinho" className='carrinho-escuro' /></a>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Cabecalho
