import { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

export default function Navegacao() {
  const [ visible, setVisible ] = useState(true)

  let component
  if(visible) {
    component =  (
      <button className='responsive-menu' onClick={changeVisibity}>
        <div className='one'></div>
        <div className='two'></div>
        <div className='three'></div>
      </button>
    )
  } else {
    component = (
      <nav className='responsive__nav'>
        <IoCloseOutline onClick={changeVisibity} className='close-button' />
        <ul className="responsive__nav_lista">
          <li className="responsive__nav_lista__item">
            <a href="#home" onClick={changeVisibity}>Home</a>
          </li>
          <li className="responsive__nav_lista__item">
            <a href="#sobre" onClick={changeVisibity}>Sobre Nós</a>
          </li>
          <li className="responsive__nav_lista__item">
            <a href="#cardapio" onClick={changeVisibity}>Cardápio</a>
          </li>
          <li className="responsive__nav_lista__item">
            <a href="#contato" onClick={changeVisibity}>Contatos</a>
          </li>
          <li className="responsive__nav_lista__item">
            <button className='cart'>
              <IoCartOutline  />
            </button>
          </li>
        </ul>
      </nav>
    )
  }

  function changeVisibity() {
    setVisible(prevValue => !prevValue)
  }

  return (
    <div className='responsive'>
     {component}
    </div>
  )
}