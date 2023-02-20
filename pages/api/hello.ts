// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require("nodemailer");
require('dotenv').config()

export default async function main(req: NextApiRequest, res: NextApiResponse) {

  // const {name, email, phone, subject, message} = req

let transporter = nodemailer.createTransport({
  host: process.env.AWS_SES_HOST,
  port: process.env.AWS_SES_PORT,
  secure: process.env.AWS_SES_SECURE, 
  auth: {
    user: process.env.AWS_SES_USER, 
    pass: process.env.AWS_SES_PASS,
  },
});

let info = await transporter.sendMail({
  from: process.env.AWS_SES_FROM, 
  to: process.env.AWS_SES_TO, 
  subject: process.env.AWS_SES_SUBJECT,   
  text: "Hello world?", 
  html: `<style>*{font-family:arial,sans-serif}a{text-decoration:none;color:#000}th,td{padding:8px}span{font-weight:800;padding-right:5px}h4,p{text-align:center}.logo{padding-bottom:10px;border-bottom:solid 4px #d3ae58}</style>
  <div class="logo">
  <img src="https://www.hpcap.com.br/logoAga.svg" alt="Logo AGÁ Empreendimentos" width="100">
  </div>
  <div>
  <h2>Menssagem do site AGÁ Empreendimentos</h2>
  <table>
  <tr>
  <td><span>Nome:</span>${req.body.name}</td>
  </tr>
  <tr>
  <td><span>E-mail:</span>${req.body.email}</td>
  </tr>
  <tr>
  <td><span>Telefone:</span>${req.body.phone}</td>
  </tr>
  <tr>
  <td><span>Assunto:</span>${req.body.subject}</td>
  </tr>
  <tr>
  <td><span>Mensagem:</span></td>
  </tr>
  <tr>
  <td style="text-align:justify">${req.body.message}</td>
  </tr>
  </table>
  </div>
  <div>
  <p>Em breve, voltaremos com mais informativos do site.</p>
  <h4><a href="https://www.agaempreendimentos.com.br/">AGÁ Empreendimentos</a></h4>
  </div>`,
})}