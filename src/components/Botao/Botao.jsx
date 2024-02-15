import './Botao.css'

export default function Botao({children, ...props}) {
  return(
    <button {...props} className='botao'>{children}</button>
  )
}