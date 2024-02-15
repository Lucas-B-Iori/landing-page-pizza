import './Sobre.css'

export default function Sobre() {
  return(
    <section id='sobre' className='sobre'>
      <div className='sobre__container'>
        <h2 className='sobre__container_titulo'>Sobre Nós</h2>
        <p className='sobre__container_texto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In deserunt eius laborum fuga repellendus libero vero sunt eum minima id totam commodi nam porro error ratione, labore eaque distinctio nisi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veniam, aliquam dolorem natus ipsum voluptatibus amet exercitationem maxime deleniti! Magnam eaque, adipisci mollitia deserunt blanditiis corrupti tenetur amet at incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non repellat doloribus sequi quaerat perferendis, commodi eum id explicabo iusto accusantium officia nemo mollitia itaque recusandae delectus temporibus dolorem natus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora tenetur itaque ab, error, repudiandae nobis provident saepe, deserunt reiciendis libero suscipit doloremque? Possimus error ex sequi ratione voluptatem autem quo.</p>
      </div>
      <img src="/images/cozinha.jpg" alt="" className='sobre__imagem' />
    </section>
  )
}