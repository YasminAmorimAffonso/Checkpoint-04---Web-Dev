import { useState } from 'react'
import { Link } from 'react-router-dom'
import Cabecalho from './components/cabecalho'
import Rodape from './components/rodape'
import './loja.css'

function Loja() {

    const produtos = [

        {

            titulo: "Bloom Restoring + multipurpose oil",
            preco: 200.00,
            precoFormatado: "R$ 200,00",
            categoria: "Beleza e Cuidados Pessoais",
            imagem: "/assets/imgs/produtosolo.png",
            link: "/produto"
        }

    ]


    const [filtrosCategoria, setFiltrosCategoria] = useState([]);

    const [filtrosPreco, setFiltrosPreco] = useState([]);

    const [produtosFiltrados, setProdutosFiltrados] = useState(produtos);

    const [erroFiltro, setErroFiltro] = useState(false);

    const [loading, setLoading] = useState(false);



    const categoriaMuda = (e) => {

        const { checked, value } = e.target

        setFiltrosCategoria(prev =>

            checked ? [...prev, value] : prev.filter(c => c !== value)

        )

    };


    const precoMuda = (e) => {

        const { checked, value } = e.target

        setFiltrosPreco(prev =>

            checked ? [...prev, value] : prev.filter(p => p !== value)

        )

    };

    const filtros = () => {
        
        setLoading(true)

        setTimeout(() => {

            let filtrados = produtos


            if (filtrosCategoria.length > 0) {

                filtrados = filtrados.filter(prod => filtrosCategoria.includes(prod.categoria))

            };


            if (filtrosPreco.length > 0) {

                filtrados = filtrados.filter(prod => {

                    return filtrosPreco.some(fp => {

                        if (fp === "50") return prod.preco <= 50

                        if (fp === "200") return prod.preco <= 200

                        return false

                    })

                })

            };


            setProdutosFiltrados(filtrados)

            setErroFiltro(filtrados.length === 0)

            setLoading(false)

        }, 1000)

    };

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

                                    <input type="checkbox" value="Roupas e Acessórios" onChange={categoriaMuda} />

                                    <p>Roupas e Acessórios</p>
                                    
                                </div>

                                <div className='loja-filtros-opcao'>

                                    <input type="checkbox" value="Beleza e Cuidados Pessoais" onChange={categoriaMuda} />

                                    <p>Beleza e Cuidados Pessoais</p>

                                </div>

                                <div className='loja-filtros-opcao'>

                                    <input type="checkbox" value="Itens para Casa" onChange={categoriaMuda} />

                                    <p>Itens para Casa</p>

                                </div>

                                <div className='loja-filtros-opcao'>

                                    <input type="checkbox" value="Tecnologia Verde" onChange={categoriaMuda} />

                                    <p>Tecnologia Verde</p>

                                </div>

                            </div>

                            <div className='linha-filtros-loja'></div>

                            <div className='filtros-opcoes'>

                                <h4>Preços</h4>

                                <div className='loja-filtros-opcao'>

                                    <input type="checkbox" value="50" onChange={precoMuda} />

                                    <p>Até R$ 50,00</p>

                                </div>

                                <div className='loja-filtros-opcao'>

                                    <input type="checkbox" value="200" onChange={precoMuda} />

                                    <p>Até R$ 200,00</p>

                                </div>

                            </div>

                        </div>

                        <div className='linha-filtros-loja'></div>

                        <button onClick={filtros}>Aplicar</button>

                    </div>

                    <div className='produtos-loja'>

                        {loading && (

                            <div className="spinner-container">

                                <div className="spinner"></div>

                                <p>Carregando produtos...</p>

                            </div>

                        )}


                        {!loading && erroFiltro && <p>Opss...nenhum produto encontrado com os filtros selecionados!</p>}

                        {!loading && produtosFiltrados.map((prod, index) => (

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
