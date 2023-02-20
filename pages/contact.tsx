import type { NextPage } from 'next'
import { Input } from '../components/Input'
import { Textarea } from '../components/Textarea'
import { TextError } from '../components/TextError'
import { Button } from '../components/Button'
import { useForm } from "react-hook-form";
import axios from 'axios'
import { notify } from "../components/Toast";

const Contact: NextPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await axios.post('/', {
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message
      })
      console.log(
        data,
        notify({ message: "Menssagem enviada com sucesso!", variant: "error" }))
    } catch (error) {
      console.log(
        error,
        notify({ message: "Ocorreu um erro!", variant: "error" }))
    }
  };

  return (
    <div className='grid grid-cols-2'>
      <div className="bg-contact col-span-1"></div>
      <div className='col-span-2 lg:col-span-1 p-16 bg-zinc-300'>
        <h1 className='font-semibold text-primary-10 text-3xl pb-5'>Fale conosco</h1>
        <p>Estamos dispostos a sanar quaisquer dúvidas que possam surgir. Caso queira falar conosco, basta preencher o formulário ao lado.</p>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 mt-5'>
          <Input
            errors={errors}
            register={register}
            rules={{ required: "Insira seu nome." }}
            name="name"
            placeholder="Escreva seu nome"
          />
          {errors.name && <TextError text="Insira seu nome." />}
          <Input
            className='col-span-1'
            errors={errors}
            register={register}
            rules={{ required: "Insira seu e-mail." }}
            name="email"
            placeholder="Escreva seu e-mail"
          />
          {errors.email && <TextError text="Insira seu e-mail." />}
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 md:col-span-1">
              <Input
                className='flex flex-col'
                errors={errors}
                register={register}
                rules={{ required: "Insira seu telefone." }}
                name="phone"
                placeholder="Insira seu telefone"
              />
              {errors.phone && <TextError text="Insira seu telefone." />}
            </div>
            <div className="col-span-2 md:col-span-1">
              <Input
                className='flex flex-col'
                errors={errors}
                register={register}
                rules={{ required: "Insira seu assunto." }}
                name="subject"
                placeholder="Insira seu assunto"
              />
              {errors.subject && <TextError text="Insira um assunto." />}
            </div>
          </div>
          <Textarea
            placeholder='Escreva aqui...'
            register={register}
            name="message"
            errors={errors}
            rules={{ required: "Escreva sua mensagem" }}
          />
          {errors.message && <TextError text="Escreva sua mensagem." />}
          <Button color="bg-primary-10" hover="hover:bg-primary-20" value="enviar" className='mt-0' />
        </form>
      </div>
    </div>
  )
}

export default Contact