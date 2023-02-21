import { ButtonDisabled } from '../components/ButtonDisabled'
import { ToastContainer, toast } from 'react-toastify';
import { TextError } from '../components/TextError'
import { Textarea } from '../components/Textarea'
import { Select } from '../components/Select'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import type { NextPage } from 'next'
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import axios from 'axios'
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
      // await axios({
      //   method: "post",
      //   url: "./api/botTelegram",
      //   data: {
      //     name: data.name,
      //     email: data.email,
      //     phone: data.phone,
      //     subject: data.subject,
      //     message: data.message
      //   }
      // })
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
      setLoading(false)
      toast.error('Ocorreu um erro!', {
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
            type='email'
            placeholder="Escreva seu e-mail"
          />
          {errors.email && <TextError text="Insira seu e-mail." />}
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 md:col-span-1">
              <Input
                className='flex flex-col'
                errors={errors}
                register={register}
                rules={{ required: "Insira seu celular." }}
                name="phone"
                placeholder="Insira seu telefone"
                type='number'
              />
              {errors.phone && <TextError text="Insira seu telefone." />}
            </div>
            <div className="col-span-2 md:col-span-1">
              <Select
                name="subject"
                errors={errors}
                register={register}
                placeholder="Escolha um assunto"
                defaultValue="2"
                rules={{ required: "Insira seu assunto." }}
              >
                <option value="Comercial">Comercial</option>
                <option value="Elogio">Elogio</option>
                <option value="Reclamações">Reclamações</option>
                <option value="Dúvidas">Dúvidas</option>
                <option value="Sugestões">Sugestões</option>
              </Select>
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