import { useState } from 'react'
import { Link } from 'react-router-dom'
import Cabecalho from './components/cabecalho'
import Rodape from './components/rodape'
import './loja.css'

function Loja() {
    // Lista de produtos
    const produtos = [
        {
            titulo: "Bloom Restoring + multipurpose oil",
            preco: 200,
            precoFormatado: "R$ 200,00",
            categoria: "Beleza e Cuidados Pessoais",
            imagem: "/assets/imgs/produtosolo.png",
            link: "/produto"
        }
    ]

    // Estados dos filtros
    const [filtrosCategoria, setFiltrosCategoria] = useState([])
    const [filtrosPreco, setFiltrosPreco] = useState([])
    const [produtosFiltrados, setProdutosFiltrados] = useState(produtos)
    const [erroFiltro, setErroFiltro] = useState(false)

    // Função para atualizar filtros de categoria
    const handleCategoriaChange = (e) => {
        const { checked, value } = e.target
        setFiltrosCategoria(prev =>
            checked ? [...prev, value] : prev.filter(c => c !== value)
        )
    }

    // Função para atualizar filtros de preço
    const handlePrecoChange = (e) => {
        const { checked, value } = e.target
        setFiltrosPreco(prev =>
            checked ? [...prev, value] : prev.filter(p => p !== value)
        )
    }

    // Aplicar filtros
    const aplicarFiltros = () => {
        let filtrados = produtos

        // Filtro por categoria
        if (filtrosCategoria.length > 0) {
            filtrados = filtrados.filter(prod => filtrosCategoria.includes(prod.categoria))
        }

        // Filtro por preço
        if (filtrosPreco.length > 0) {
            filtrados = filtrados.filter(prod => {
                return filtrosPreco.some(fp => {
                    if (fp === "50") return prod.preco <= 50
                    if (fp === "200") return prod.preco <= 200
                    return false
                })
            })
        }

        setProdutosFiltrados(filtrados)
        setErroFiltro(filtrados.length === 0)
    }

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
                                    <input type="checkbox" value="Roupas e Acessórios" onChange={handleCategoriaChange} />
                                    <p>Roupas e Acessórios</p>
                                </div>
                                <div className='loja-filtros-opcao'>
                                    <input type="checkbox" value="Beleza e Cuidados Pessoais" onChange={handleCategoriaChange} />
                                    <p>Beleza e Cuidados Pessoais</p>
                                </div>
                                <div className='loja-filtros-opcao'>
                                    <input type="checkbox" value="Itens para Casa" onChange={handleCategoriaChange} />
                                    <p>Itens para Casa</p>
                                </div>
                                <div className='loja-filtros-opcao'>
                                    <input type="checkbox" value="Tecnologia Verde" onChange={handleCategoriaChange} />
                                    <p>Tecnologia Verde</p>
                                </div>
                            </div>

                            <div className='linha-filtros-loja'></div>

                            <div className='filtros-opcoes'>
                                <h4>Preços</h4>
                                <div className='loja-filtros-opcao'>
                                    <input type="checkbox" value="50" onChange={handlePrecoChange} />
                                    <p>Até R$ 50,00</p>
                                </div>
                                <div className='loja-filtros-opcao'>
                                    <input type="checkbox" value="200" onChange={handlePrecoChange} />
                                    <p>Até R$ 200,00</p>
                                </div>
                            </div>
                        </div>

                        <div className='linha-filtros-loja'></div>
                        <button onClick={aplicarFiltros}>Aplicar</button>
                    </div>

                    <div className='produtos-loja'>
                        {erroFiltro && <p>Opss...nenhum produto encontrado com os filtros selecionados!</p>}

                        {produtosFiltrados.map((prod, index) => (
                            <Link key={index} to={prod.link} className='link-loja'>
                                <div className='card-loja'>
                                    <div>
                                        <img src={prod.imagem} alt={prod.titulo} />
                                    </div>
                                    <h4>{prod.titulo}</h4>
                                    <h6>{prod.precoFormatado}</h6>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <Rodape />
            </div>
        </>
    )
}

export default Loja
