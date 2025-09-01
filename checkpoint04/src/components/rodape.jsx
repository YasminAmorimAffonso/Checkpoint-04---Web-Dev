import { useState } from 'react'
import { Link } from 'react-router-dom'
import './rodape.css'

function Rodape() {

    return (
        <>

            <div className="tudo-rodape">


                <img src="/assets/imgs/logo.png" alt="logo" className='logo'/>

                <img src="/assets/imgs/vinhaclara.png" alt="" className='vinha-rodape'/>

                <div className='sobre-nos'>

                        <h2>Sobre Nós</h2>

                        <p>Somos movidos pela ideia de que pequenas escolhas geram grandes mudanças. Nossa empresa nasceu com a missão de facilitar o acesso a produtos sustentáveis, tornando simples adotar um estilo de vida mais consciente. Trabalhamos com fornecedores que compartilham dos nossos valores, priorizando práticas éticas, materiais renováveis e processos de baixo impacto ambiental. Queremos ir além da venda: buscamos inspirar, educar e apoiar pessoas que acreditam que cuidar do planeta é também cuidar de nós mesmos.</p>

                </div>


                <img src="/assets/imgs/vinhaclara.png" alt="" className='vinha-rodape'/>

                <div className='buttons-rodape'>

                    <h2>Links</h2>

                    <div className='links-rodape'>

                        <Link to="/" className='links-rodape'>Home</Link>

                        <Link to="/loja" className='links-rodape'>Loja</Link>

                        <Link to="/carrinho" className='links-rodape'>Carrinho</Link>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Rodape 
