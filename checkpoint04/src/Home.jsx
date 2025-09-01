import { useState } from 'react'
import Cabecalho from './components/cabecalho'
import Rodape from './components/rodape'
import './home.css'

function Home() {


  return (
    <>
      <div className='body-home'>

        <Cabecalho />

        <div className='content-home'>

          <div className='secao1-home'>

            <img src="/assets/imgs/circulo.png" alt="" className='circulo-home'/>

            <h1>Sustainable Products</h1>

            <h3>Por um mundo verde mais acessível</h3>

          </div>

          <div className='secao2-home'>

            <h3>Por mais produtos sustentáveis no mercado</h3>

            <p>Na nossa empresa, acreditamos que cada escolha de consumo pode transformar o mundo. Por isso, reunimos em um só lugar produtos que unem qualidade, estilo e responsabilidade com o planeta. Nossa linha inclui roupas e acessórios sustentáveis, feitos para quem busca beleza e consciência; produtos de beleza e cuidados pessoais naturais, que respeitam você e o meio ambiente; itens para casa sustentáveis, que trazem praticidade e harmonia ao seu dia a dia; e tecnologia verde, desenvolvida para reduzir impactos e promover um futuro mais limpo.
              Mais do que vender, queremos inspirar: cada produto é um convite para viver de forma mais equilibrada, saudável e sustentável. Porque juntos podemos impulsionar a mudança que o mercado – e o planeta – precisam.</p>

          </div>

          <img src="/assets/imgs/vinhaescura.png" alt="" className='vinhas-home'/>

          <div className='secao3-home'>

            <h3>Nossa Missão</h3>

            <p>Acreditamos em um mercado mais justo, acessível e sustentável. Queremos ampliar as opções de consumo consciente, tornando-as cada vez mais presentes no dia a dia das pessoas. Nossa missão é oferecer não apenas produtos, mas caminhos para um futuro em que estilo de vida e cuidado com o planeta caminhem juntos.</p>

          </div>

          <img src="/assets/imgs/vinhaescura.png" alt="" className='vinhas-home'/>

          <div className='secao4-home'>

            <h3>Nossos Produtos</h3>

            <h4>Roupas e Acessórios Sustentáveis</h4>

            <p>Moda é expressão, mas também pode ser transformação. Nossas roupas e acessórios são produzidos com tecidos ecológicos, reciclados ou de origem responsável, garantindo estilo e durabilidade sem agredir o meio ambiente. Cada peça foi pensada para unir conforto, design moderno e consciência ambiental.</p>

          </div>

          <img src="/assets/imgs/vinhaescura.png" alt="" className='vinhas-home'/>

          <div className="secao5-home">

            <h4>Beleza e Cuidados Pessoais Naturais</h4>

            <p>Cuidar de si é também cuidar do planeta. Nossa linha de beleza e bem-estar é composta por produtos naturais, livres de químicos agressivos e embalagens poluentes. São fórmulas seguras, que respeitam sua pele, seu corpo e a natureza, promovendo um autocuidado que valoriza o equilíbrio.</p>

          </div>

          <img src="/assets/imgs/vinhaescura.png" alt="" className='vinhas-home'/>

          <div className='secao6-home'>

            <h4>Itens para Casa Sustentáveis</h4>

            <p>O lar é o espaço onde nossas escolhas se refletem todos os dias. Por isso, oferecemos alternativas inteligentes para deixar sua casa mais prática, bonita e ecológica. De utensílios reutilizáveis a soluções que reduzem o desperdício, cada produto ajuda você a viver de forma mais leve e consciente.</p>

          </div>

          <img src="/assets/imgs/vinhaescura.png" alt="" className='vinhas-home'/>


          <div className='secao7-home'>

            <h4>Tecnologia Verde</h4>

            <p>A inovação também pode ser sustentável. Nossa seleção de tecnologia verde reúne soluções modernas que economizam energia, reduzem impactos ambientais e incentivam práticas responsáveis. São produtos que mostram que o futuro pode ser tecnológico sem deixar de ser ecológico.</p>

          </div>

        </div>

        <Rodape/>

      </div>
    </>
  )
}

export default Home
