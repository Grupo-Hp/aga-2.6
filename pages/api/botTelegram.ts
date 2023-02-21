// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
require('dotenv').config()
const { Telegraf } = require('telegraf');

export default async function botTelegram(req: NextApiRequest, res: NextApiResponse) {

  const bot = new Telegraf(process.env.BOT_TOKEN);

  const { name, email, phone, subject, message } = req.body

  await bot.telegram.sendMessage(1726260745, `  
  Menssagem do site AGÁ Empreendimentos

  Nome:  ${name}

  E-mail:  ${email}  

  Telefone:  ${phone}  

  Assunto:  ${subject}  

  Mensagem:
  ${message}
 `
  )
    .then((message: any) => {
      console.log(message)
      res.status(200).json({ message: "Mensagem enviada com sucesso!" });
    }).catch((err: any) => console.log(err))
}