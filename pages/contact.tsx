import type { NextPage } from 'next'
import { useState } from 'react'
import { Input } from '../components/Input'
import { Textarea } from '../components/Textarea'
import { TextError } from '../components/TextError'
import { Button } from '../components/Button'
import { ButtonDisabled } from '../components/ButtonDisabled'
import { useForm } from "react-hook-form";
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Contact: NextPage = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: any) => {
    setLoading(true)
    try {
      await axios({
        method: "post",
        url: "./api/hello",
        data: {
          id: uuidv4(),
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message
        }
      })
      setLoading(false)
      reset()
      toast.success('Mensagem enviada com sucesso!', {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      console.log(error)
      toast.success('Ocorreu um erro!', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };

  return (
    <div className='grid grid-cols-2'>
      <div className="bg-contact col-span-1"><ToastContainer /></div>
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
          {loading && <ButtonDisabled color="bg-gray-600" value="aguarde..." className='mt-0' />}
          {!loading && <Button color="bg-primary-10" hover="hover:bg-primary-20" value="enviar" className='mt-0' />}
        </form>
      </div>
    </div>
  )
}

export default Contact