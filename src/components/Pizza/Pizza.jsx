import './Pizza.css'
import Botao from '../Botao/Botao'

export default function Pizza({ imagem, nome }) {
  return (
    <li className='pizza'>
      <img src={imagem} alt="" className='pizza__imagem' />
      <div className='pizza__meta'>
        <h3 className='pizza__meta_nome'>{nome}</h3>
        <div className='pizza__meta_caixa'>
          <div className='pizza__meta_caixa__fatias'>
            <h4>6 Fatias</h4>
            <h4>8 Fatias</h4>
            <h4>12 Fatias</h4>
          </div>
          <div className='pizza__meta_caixa__precos'>
            <p>R$35,00</p>
            <p>R$45,00</p>
            <p>R$55,00</p>
          </div>
        </div>
        <Botao>Pedir agora</Botao>
      </div>
    </li>
  )
}