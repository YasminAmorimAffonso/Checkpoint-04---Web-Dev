import { useState } from 'react'
import Cabecalho from './components/cabecalho'
import Rodape from './components/rodape'
import './paginaProduto.css'

function Produto() {
    const [mensagem, setMensagem] = useState('');

    const produtoInfo = {
        id: 1,
        nome: "Bloom Restoring + multipurpose oil",
        preco: 200.00
    };

    const adicionarAoCarrinho = () => {

        sessionStorage.setItem(produtoInfo);

        setMensagem(`Produto "${produtoInfo.nome}" adicionado ao carrinho!`);
    };

    return (
        <>
            <div className='body-produto'>

                <Cabecalho />

                <div className='content-produto'>

                    <img src="/assets/imgs/produtosolo.png" alt="produto" />

                    <div className='info-produto'>

                        <h1>{produtoInfo.nome}</h1>

                        <p>Bloom is crafted with a prime blend of 100% pure botanical oils. This new formula enhanced with bakuchiol and prikly pear oil restores nourishes and visibly improve skin and hair. Naturally scented with notes of rosemary, lavender and dark patchouli. It is suitable for all skin and hair types.</p>

                        <div className='linha-produto'></div>

                        <h2>R$ {produtoInfo.preco.toFixed(2)}</h2>
                        
                        <button onClick={adicionarAoCarrinho}>Adicionar ao Carrinho</button>
                        {mensagem && <p className='mensagem-confirmacao'>{mensagem}</p>}

                    </div>

                </div>

                <Rodape />

            </div>
        </>
    )
}

export default Produto
