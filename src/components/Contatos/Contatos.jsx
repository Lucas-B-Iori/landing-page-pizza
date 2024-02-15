import './Contatos.css'
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Contatos() {
  return (
    <section id='contato' className='contatos'>
      <h2 className='contatos__titulo'>Contatos</h2>
      <div className='contatos__meta'>
        <div className='contatos__meta_caixa'>
          <span>
            <FaPhoneAlt />
          </span>
          <p>(16)99741-8746</p>
        </div>
        <div className='contatos__meta_caixa'>
          <span>
            <FaGithub />
          </span>
          <p>Lucas-B-Iori</p>
        </div>
        <div className='contatos__meta_caixa'>
          <span>
            <FaLinkedin />
          </span>
          <p>lucas-iori</p>
        </div>
      </div>
    </section>
  )
}