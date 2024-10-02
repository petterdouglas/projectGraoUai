// hooks e dependências
import PropTypes from 'prop-types'

// estilos
import '../styles/components/comments.sass'

// imagens
import Btn2 from '../assets/btn-2.png'
import TransparentBtn from '../assets/transparent-btn.png'
import Aspas1 from '../assets/aspas.png'
import Aspas2 from '../assets/aspas.png'

const Comment2 = ({ setChange, setInterrupted }) => {

    const handleClick = () => {
        setInterrupted(prevInterrupted => !prevInterrupted)
        setChange(prevChange => !prevChange)
    }

    return (
        <section className="comment comment2">
            <h1>Depoimentos</h1>
            <div className='comments-contents comments-contents2'>
                <img className='aspas-top' src={Aspas1} alt="" width='40px' />
                <h2>Como se concretiza a parceria entre o
                    Uai Café e o produtor?</h2>
                <p>Quando tenho os cafés beneficiados prontos para venda, com laudo, notas sensoriais e pontuação, entro em contato com a Uai Café. Eles perguntam o valor da saca e a quantidade desejada, e eu calculo o preço de venda do café especial. Em seguida, combinamos a entrega e o pagamento. A Uai Café comercializa nosso café sob sua marca, mencionando nossa família e a origem do café nas embalagens.</p>
                <p><span>Fernando Morais, cafeicultor</span></p>
                <img className='aspas-bottom' src={Aspas2} alt="" width='40px' />
            </div>
            <div className='btn_container'>
                <button className='btn left-btn2' onClick={handleClick}><img src={TransparentBtn} alt='#' /></button>
                <button className='btn right-btn2' ><img src={Btn2} alt='#' /></button>
            </div>
        </section>
    )
}

Comment2.propTypes = {
    setChange: PropTypes.func.isRequired,
    setInterrupted: PropTypes.func.isRequired,
}

export default Comment2