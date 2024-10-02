//estilos
import '../styles/components/home.sass'

const Home = () => {

  const handleScroll = (e) => {
    e.preventDefault()
    const targetId = e.currentTarget.getAttribute('href')
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 40
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    }
  }
  
  return (
    <div id='home' className='home'>
      <div className='espaçamento'>
      </div>
      <div className="home_container">
        <h1 className="home-title">Saboreie o autêntico café de Lavras com o Grão Uai</h1>
        <h2 className="home-content">Cultivado com amor e práticas sustentáveis, nosso café especial conecta você à origem e à tradição. Siga-nos no Instagram e descubra o verdadeiro sabor do café!</h2>
        <button id="home-btn"><a href="#contacts" onClick={handleScroll}>Entrar em Contato</a></button>
      </div>
    </div>
  )
}

export default Home