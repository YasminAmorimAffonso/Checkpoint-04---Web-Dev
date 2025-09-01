import { useState } from 'react'
import Cabecalho from './components/cabecalho'
import Rodape from './components/rodape'
import './paginaProduto.css'

function Produto() {


    return (
        <>
            <div className='body-produto'>

                <Cabecalho />

                <div className='content-produto'>

                    <img src="/assets/imgs/produtosolo.png" alt="produto" />

                    <div className='info-produto'>

                        <h1>Bloom Restoring + multipurpose oil</h1>

                        <p>Bloom is crafted with a prime blend of 100% pure botanical oils. This new formula enhanced with bakuchiol and prikly pear oil restores nourishes and visibly improve skin and hair. Naturally scented with notes of rosemary, lavender and dark patchouli. It is suitable for all skin and hair types.</p>

                        <div className='linha-produto'></div>

                        <h2>R$ 200.00</h2>

                        <button>Adicionar ao Carrinho</button>

                    </div>


                </div>

                <Rodape />

            </div>
        </>
    )
}

export default Produto
