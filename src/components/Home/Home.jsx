import Botao from '../Botao/Botao'
import './Home.css'

export default function Home() {
  return (
    <section id="home" className="home">
      <h1 className="home__titulo">Deixe seu dia mais saboroso!</h1>
      <h3 className="home__subtitulo">As melhores pizzas da região</h3>
      <div className="home__container">
        <Botao>Reserve a sua</Botao>
        <Botao>Montar a sua pizza</Botao>
      </div>
    </section>
  )
}