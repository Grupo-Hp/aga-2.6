// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require("nodemailer");
require('dotenv').config()

export default async function main(req: NextApiRequest, res: NextApiResponse) {

  const { id, name, email, phone, subject, message } = req.body

  let transporter = nodemailer.createTransport({
    host: process.env.SES_HOST,
    port: process.env.SES_PORT,
    secure: process.env.SES_SECURE,
    auth: {
      user: process.env.SES_USER,
      pass: process.env.SES_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SES_FROM,
    to: process.env.SES_TO,
    subject: process.env.SES_SUBJECT,
    text: "Hello world?",
    html: `<style>*{font-family:arial,sans-serif}a{text-decoration:none;color:#000}th,td{padding:8px}span{font-weight:800;padding-right:5px}h4,p{text-align:center}.logo{padding-bottom:10px;border-bottom:solid 4px #d3ae58}</style>
  <div class="logo">
  <img src="https://www.hpcap.com.br/logoAga.svg" alt="Logo AGÁ Empreendimentos" width="100">
  </div>
  <div>
  <h2>Menssagem do site AGÁ Empreendimentos</h2>
  <table>
  <tr>
  <td><span>ID:</span>${id}</td>
  </tr>
  <tr>
  <td><span>Nome:</span>${name}</td>
  </tr>
  <tr>
  <td><span>E-mail:</span>${email}</td>
  </tr>
  <tr>
  <td><span>Telefone:</span>${phone}</td>
  </tr>
  <tr>
  <td><span>Assunto:</span>${subject}</td>
  </tr>
  <tr>
  <td><span>Mensagem:</span></td>
  </tr>
  <tr>
  <td style="text-align:justify">${message}</td>
  </tr>
  </table>
  </div>
  <div>
  <p>Em breve, voltaremos com mais informativos do site.</p>
  <h4><a href="https://www.agaempreendimentos.com.br/">AGÁ Empreendimentos</a></h4>
  </div>`,
  }).then((message: any) => {
    console.log(message)
    res.status(200).json({ message: "Mensagem enviada com sucesso!" });
  }).catch((err: any) => console.log(err))

}