// hookes e dependências

// imagens
import Logo from '../assets/Logo.png'
import Barra from '../assets/Barra.png'
import WhatsLogo from '../assets/WhatsappLogo.png'
import InstaLogo from '../assets/InstagramLogo.png'
import RamosCafe1 from '../assets/folhaDeCafe.png'
import RamosCafe2 from '../assets/folhaDeCafe2.png'

// estilos
import '../styles/components/contacts.sass'

const Contacts = () => {
  return (
    <div id='contacts' className='contacts'>
      <img id='ramo1' src={RamosCafe1} alt="" width='240px' />
      <div className='contacts_container'>
        <img src={Logo} alt="Logo" width='100px' />
        <h1>Contatos</h1>
        <section className='contacts-contents'>
          <section className='content1'>
            <div className='adress'>
              <h2>Endereço local</h2>
              <p>
                Sala Enactus UFLA, localizada na Universidade Federal de Lavras (Lavras - MG)
              </p>
            </div>
            <div className="hour">
              <h2>Horário de funcionamento</h2>
              <p>Seg a Sábado: 08h às 18h</p>
            </div>
          </section>
          <img src={Barra} alt="" />
          <section className='content2'>
            <div className='points'>
              <h2>Endereço local</h2>
              <p>
                Sala Enactus UFLA, localizada na Universidade Federal de Lavras (Lavras - MG)
              </p>
            </div>
            <div className="mail">
              <h2>Horário de funcionamento</h2>
              <p>Seg a Sábado: 08h às 18h</p>
            </div>
          </section>
        </section>
        <div className='contacts-btn'>
          <div><a href="#"><img src={WhatsLogo} alt="Whatsapp" width='60px' /></a></div>
          <div><a href="#"><img src={InstaLogo} alt="Whatsapp" width='60px' /></a></div>
        </div>
      </div>
      <img id='ramo2' src={RamosCafe2} alt="" width='240px' />
    </div>
  )
}


export default Contacts