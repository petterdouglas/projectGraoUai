// hooks e dependências
import PropTypes from 'prop-types'

// estilos
import '../styles/components/comments.sass'

//imagens
import BtnTransparent from '../assets/transparent-btn.png'
import Btn1 from '../assets/btn-1.png'
import Aspas1 from '../assets/aspas.png'
import Aspas2 from '../assets/aspas.png'

const Comment1 = ({ setChange, setInterrupted }) => {

    const handleClick = () => {
        setInterrupted(prevInterrupted => !prevInterrupted)
        setChange(prevChange => !prevChange)
    }

    return (

        <section className="comment comment1">
            <h1>Depoimentos</h1>
            <div className='comments-contents comments-contents1'>
                <img className='aspas-top' src={Aspas1} alt="" width='40px' />
                <h2>Como se concretiza a parceria entre o
                    Uai Café e o produtor?</h2>
                <p>A parceria com a Uai Café traz dois grandes benefícios: a valorização e a divulgação do nosso produto. Temos autonomia para definir o preço da saca, ao contrário de outros compradores que impõem o valor. Além disso, nosso café é divulgado em diversos estados, cidades e eventos, permitindo que os consumidores conheçam a origem e o trabalho da nossa família, a Família Morais, que produz os Cafés Carmelita de forma sustentável.</p>
                <p><span>Rayane Morais, cafeicultora</span></p>
                <img className='aspas-bottom' src={Aspas2} alt="" width='40px' />
            </div>
            <div className='btn_container'>
                <button className='btn left-btn1'><img src={Btn1} alt='#' /></button>
                <button className='btn right-btn1' onClick={handleClick}><img src={BtnTransparent} alt='#' /></button>
            </div>
        </section >
    )
}

Comment1.propTypes = {
    setChange: PropTypes.func.isRequired,
    setInterrupted: PropTypes.func.isRequired,
}

export default Comment1