// estilos
import '../styles/components/process.sass'

// imagens
import primeiro from '../assets/1.png'
import segundo from '../assets/2.png'
import terceiro from '../assets/3.png'
import quarto from '../assets/4.png'
import quinto from '../assets/5.png'

const Process = () => {
  return (
    <div id='process' className="process_container">
      <div className='process-title'>
        <h1>Nossos Processos</h1>
      </div>
      <ul className='process-contents'>
        <li className='process1 process'>
          <img src={primeiro} alt="primeiro" width='80px' />
          <h2>Seleção de Produtores</h2>
          <p className='process--p'>Trabalhamos com pequenos agricultores que cultivam <span>cafés especiais</span> com práticas <span>sustentáveis</span> adquiridas por meio das nossas capacitações, <span>valorizando</span> a <span>agricultura</span> local.</p>
        </li>
        <li className='process2 process'>
          <img src={segundo} alt="segundo" width='80px' />
          <h2>Qualidade Garantida</h2>
          <p className='process--p'>Cada grão é <span>cuidadosamente</span> armazenado e processado para <span>preservar</span> a frescura e o sabor, mantendo o padrão de <span>excelência</span>.</p>
        </li>
        <li className='process3 process'>
          <img src={terceiro} alt="terceiro" width='80px' />
          <h2>Embalagem com Propósito</h2>
          <p className='process--p'>Nossas embalagens <span>sustentáveis</span> protegem o café e contam a <span>história</span> de cada <span>produtor</span>, levando mais que um produto: uma <span>experiência</span>.</p>
        </li>
        <li className='process4 process'>
          <img src={quarto} alt="quarto" width='80px' />
          <h2>Entrega Rápida e Eficiente</h2>
          <p className='process--p'>Garantimos que o café chegue até você com <span>agilidade</span>, preservando toda sua <span>qualidade</span> e <span>frescor</span>.</p>
        </li>
        <li className='process5 process'>
          <img src={quinto} alt="quinto" width='80px' />
          <h2>Atendimento Dedicado</h2>
          <p className='process--p'>Desde a compra até o pós-venda, <span>cuidamos</span> de cada <span>detalhe</span> para oferecer uma <span>experiência</span> única e <span>completa</span>.</p>
        </li>
      </ul>
    </div>
  )
}

export default Process