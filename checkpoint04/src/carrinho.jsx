import { useState } from 'react'
import { Link } from 'react-router-dom'
import Cabecalho from './components/cabecalho'
import Rodape from './components/rodape'
import './carrinho.css'

function Carrinho() {


    return (
        <>
            <div className='body-carrinho'>

                <Cabecalho />

                <div className='content-carrinho'>

                    <h1>Carrinho</h1>

                    <div className='info-compra-carrinho'>

                        <div className='produto-carrinho'>

                            <Link to="/produto" className='link-carrinho'>

                                <div className='card-carrinho'>

                                    <div>

                                        <img src="/assets/imgs/produtosolo.png" alt="" />

                                    </div>

                                    <h4>Bloom Restoring + multipurpose oil</h4>

                                    <h6>R$ 200,00</h6>

                                </div>

                            </Link>

                        </div>

                        <div className='info-carrinho'>

                            <h3>Cupom</h3>

                            <div className='input-cupom'>

                                <input type="text" placeholder='Código' />

                                <button className='botao-cupom'>→</button>

                            </div>

                            <div className='carrinho-subtotal'>

                                <h2>Subtotal</h2>

                                <p>R$ xx,xx</p>

                            </div>

                            <div className='carrinho-subtotal'>

                                <h2>Entrega</h2>

                                <p>R$ xx,xx</p>

                            </div>


                            <div className='linha-carrinho'></div>

                            <div className='carrinho-subtotal'>

                                <h2>Total</h2>

                                <p>R$ xx,xx</p>

                            </div>

                            <button className='botao-finalizar'>Continuar</button>

                        </div>

                    </div>

                </div>

                <Rodape />

            </div>
        </>
    )
}

export default Carrinho
