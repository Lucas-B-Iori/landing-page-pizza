import { useState } from 'react'
import './Header.css'
import { IoCartOutline } from "react-icons/io5";
import Navegacao from '../Navegacao/Navegacao';

export default function Header() {
  const [ visible, setVisible ] = useState(false)

  const menuButtonClass = visible ? '' : 'none'
  const navClass = visible ? 'none' : ''

  function changeVisibity() {
    setVisible(prevValue => !prevValue)
  }

  return (
    <header>
      <div className="header__logo">
        <img src="/images/logo-pizza.png" alt="" />
        <h2>PizzaShop</h2>
      </div>
      <Navegacao />
      <nav className={'header__nav'}>
        <ul className="header__nav_lista">
          <li className="header__nav_lista__item">
            <a href="#home">Home</a>
          </li>
          <li className="header__nav_lista__item">
            <a href="#sobre">Sobre Nós</a>
          </li>
          <li className="header__nav_lista__item">
            <a href="#cardapio">Cardápio</a>
          </li>
          <li className="header__nav_lista__item">
            <a href="#contato">Contatos</a>
          </li>
          <li className="header__nav_lista__item">
            <button>
              <IoCartOutline className='cart'/>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}