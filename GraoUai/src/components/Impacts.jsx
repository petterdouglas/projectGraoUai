//estilos
import '../styles/components/impacts.sass'

// imagens
import Familias from "../assets/familias-icon.png"
import Renda from "../assets/renda-icon.png"
import Producao from "../assets/producao-icon.png"

const Impacts = () => {
  return (
    <div id='impacts' className="impacts_container">
      <h1 className="impacts-title">Impactos gerados</h1>
      <p className='impacts-content'>O Grão Uai impactou três famílias em Lavras e região, gerando mais de R$ 4.000 de renda no último ano. Ofereceu capacitações gratuitas focadas na qualidade do café, garantindo valorização na venda e, com práticas de comércio justo, aumentou em 336% o valor da produção para pequenos produtores.</p>
      <ul className="impacts-details">
        <li id='familias'>
          <h2>Famílias Impactadas</h2>
          <img src={Familias} alt="Famílias" width='80px'/>
          <p>3</p>
        </li>
        <li id='renda'>
          <h2>Renda Anual</h2>
          <img src={Renda} alt="Renda" width='80px'/>
          <p>+R$4000,00</p>
        </li>
        <li id='producao'>
          <h2>Valor da produção</h2>
          <img src={Producao} alt="Produção" width='80px'/>
          <p>+336%</p>
        </li>
      </ul>
    </div>
  )
}

export default Impacts