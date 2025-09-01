import { useState } from 'react'
import { Link } from 'react-router-dom'
import Cabecalho from './components/cabecalho'
import Rodape from './components/rodape'
import './carrinho.css'

function Carrinho() {

    const [produto, setProduto] = useState([]);



    for (let n = 0; sessionStorage.length; n++){

        let produto = [];

        sessionStorage.getItem("produto");

    let valorFinal = {produto.preco} + 19.9;

    const Limpar = () => {

        sessionStorage.clear();

    }

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

                                    <h4>{produto.nome}</h4>

                                    <h6>R$ {produto.preco}</h6>

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

                                <p>R$ {produto.preco}</p>

                            </div>

                            <div className='carrinho-subtotal'>

                                <h2>Entrega</h2>

                                <p>R$ 19,90</p>

                            </div>


                            <div className='linha-carrinho'></div>

                            <div className='carrinho-subtotal'>

                                <h2>Total</h2>

                                <p>R$ {valorFinal} </p>

                            </div>

                            <button className='botao-finalizar' onClick = Limpar>Continuar</button>

                        </div>

                    </div>

                </div>

                <Rodape />

            </div>
        </>
    )
}

export default Carrinho
