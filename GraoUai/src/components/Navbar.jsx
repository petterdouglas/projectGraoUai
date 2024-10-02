// imagens
import Logo from '../assets/graoUAI-logo.png'

// estilos
import '../styles/components/navbar.sass'

const Navbar = () => {

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
    <div className='nav_container'>
      <a href='#home' id='logo' onClick={handleScroll} ><img src={Logo} alt="Logo Grão Uai" width='160px' height='50px' /></a>
      <ul className='nav_sections'>
        <li><a href="#about" onClick={handleScroll} >Sobre Nós</a></li>
        <li><a href="#process" onClick={handleScroll} >Nossos Processos</a></li>
        <li><a href="#comments" onClick={handleScroll} >Depoimentos</a></li>
        <li><a href="#contacts" onClick={handleScroll} >Contatos</a></li>
      </ul>
    </div>
  )
}

export default Navbar