// estilos
import '../styles/components/about.sass'

// imagens
import Detalhe from '../assets/sobre-detalhe.png'
import Img1 from '../assets/sobre1-bg.png'
import Img2 from '../assets/sobre2-bg.png'
import Img3 from '../assets/sobre3-bg.png'

const About = () => {
  return (
    <div id='about' className="about_container">
      <div className='section_content'>
        <h2>Venha conhecer</h2>
        <h1>Sobre Nós</h1>
        <img src={Detalhe} alt="........" width='200px'/>
        <p>
          O Grão Uai surgiu durante a pandemia como parte do projeto Uai Café da Enactus UFLA, com o objetivo de apoiar pequenos produtores de café especial em Lavras, Minas Gerais. A marca cresceu através de parcerias estratégicas e participações em editais, fornecendo recursos para melhorar a qualidade do café e incentivar práticas sustentáveis. Hoje, o Grão Uai combina tradição e inovação, gerando impacto positivo nas comunidades e oferecendo um café de alta qualidade, comprometido com o desenvolvimento social e ambiental.
        </p>
      </ div>
      <div className='section_photos'>
        <div className='photos'>
          <img id='img1' src={Img1} alt="img1" width='280px' height='240px'/>
          <img id='img2' src={Img2} alt="img2" width='280px' height='240px'/>
        </div>
        <div className='photos'>
          <img id='img3' src={Img3} alt="img3" width='280px' height='500px'/>
        </div>
      </div>

    </div>
  )
}

export default About