import { useState } from 'react'
import { Link } from 'react-router-dom'
import Cabecalho from './components/cabecalho'
import Rodape from './components/rodape'
import './loja.css'

function Loja() {


    return (
        <>
            <div className='body-loja'>

                <Cabecalho />

                <div className='content-loja'>

                    <div className='secao1-loja'>

                        <h1>Cuidando dos seus cabelos e do planeta</h1>

                    </div>

                    <img src="/assets/imgs/vinhaescura.png" alt="" />

                </div>

                <div className='secao-produtos'>

                    <div className='filtros-loja'>

                        <h3>Filtros</h3>

                        <div className='linha-filtros-loja'></div>

                        <div className='filtros-categoria'>

                            <h4>Categoria</h4>

                            <div className='filtros-opcoes'>

                                <div className='loja-filtros-opcao'>

                                    <input type="checkbox" />

                                    <p>Roupas e Acessórios</p>

                                </div>

                                <div className='loja-filtros-opcao'>

                                    <input type="checkbox" />

                                    <p>Beleza e Cuidados Pessoais</p>

                                </div>

                                <div className='loja-filtros-opcao'>

                                    <input type="checkbox" />

                                    <p>Itens para Casa</p>

                                </div>

                                <div className='loja-filtros-opcao'>

                                    <input type="checkbox" />

                                    <p>Tecnologia Verde</p>

                                </div>

                            </div>

                            <div className='linha-filtros-loja'></div>

                            <div className='filtros-opcoes'>

                                <h4>Preços</h4>


                                <div className='loja-filtros-opcao'>

                                    <input type="checkbox" />

                                    <p>Até R$ 50,00</p>

                                </div>

                                <div className='loja-filtros-opcao'>

                                    <input type="checkbox" />

                                    <p>Até R$ 200,00</p>

                                </div>


                            </div>

                        </div>

                        <div className='linha-filtros-loja'></div>

                        <button>Aplicar</button>

                    </div>

                    <div className='produtos-loja'>

                        <Link to="/produto" className='link-loja'>

                            <div className='card-loja'>

                                <div>

                                    <img src="/assets/imgs/produtosolo.png" alt="" />

                                </div>

                                <h4>Bloom Restoring + multipurpose oil</h4>

                                <h6>R$ 200,00</h6>

                            </div>

                        </Link>

                        <Link to="produto" className='link-loja'>

                            <div className='card-loja'>

                                <div>

                                    <img src="/assets/imgs/produtosolo.png" alt="" />

                                </div>

                                <h4>Bloom Restoring + multipurpose oil</h4>

                                <h6>R$ 200,00</h6>

                            </div>

                        </Link>

                    </div>

                </div >

                <Rodape />

            </div >
        </>
    )
}

export default Loja
