import type { NextPage } from 'next'
import { Input } from '../components/Input'
import { Textarea } from '../components/Textarea'
import { Button } from '../components/Button'

const Contact: NextPage = () => {

  return (
    <div className='grid grid-cols-2'>
      <div className="bg-contact col-span-1"></div>
      <div className='col-span-2 lg:col-span-1 p-16 bg-zinc-300'>
        <h1 className='font-semibold text-primary-10 text-3xl pb-5'>Fale conosco</h1>
        <p>Estamos dispostos a sanar quaisquer dúvidas que possam surgir. Caso queira falar conosco, basta preencher o formulário ao lado.</p>
        <form className='flex flex-col gap-3 mt-5'>
          <Input placeholder='Digite seu nome*' />
          <Input placeholder='Digite seu e-mail*' />
          <div className="grid grid-cols-2 gap-3">
            <Input className='col-span-2 md:col-span-1' placeholder='Digite seu telefone*' />
            <Input className='col-span-2 md:col-span-1' placeholder='Digite seu assunto*' />
          </div>
          <Textarea placeholder='Escreva aqui' />
          <Button color="bg-primary-10" hover="hover:bg-primary-20" value="enviar" className='mt-0' />
        </form>
      </div>
    </div>
  )
}

export default Contact