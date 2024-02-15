import './Cardapio.css'
import pizzas from '../../pizzas.json'
import Pizza from '../Pizza/Pizza'

export default function Cardapio() {
  return(
    <section id='cardapio' className='cardapio'>
      <h2 className='cardapio__titulo'>Cardápio</h2>
      <ul className='cardapio__pizzas'>
        {pizzas.map(pizza => (
          <Pizza key={pizza.nome} imagem={pizza.imagem} nome={pizza.nome} />
        ))}
      </ul>
    </section>
  )
}