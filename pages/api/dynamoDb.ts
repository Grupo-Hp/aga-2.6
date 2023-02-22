import AWS from 'aws-sdk';
require('dotenv').config()
import type { NextApiRequest, NextApiResponse } from 'next';
import {AwsCredencials} from './credenciais';

AWS.config.update(AwsCredencials.AwsConfig);
let ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

export default async function dynamoDb(req: NextApiRequest, res: NextApiResponse) {

    const { id, name, email, phone, subject, message } = req.body

    let params = {
        TableName: "CONTACT_AGA_SITE",
        Item: {
            'ID': { S: id },
            'NOME': { S: name },
            'EMAIL': { S: email },
            'TELEFONE': { S: phone },
            'ASSUNTO': { S: subject },
            'MESSAGEM': { S: message },
        }
    };

    //Call DynamoDB to add the item to the table
    await ddb.putItem(params, function ({ err, data }: any) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
            res.status(200).json({ message: "Mensagem enviada com sucesso!" });
        }
    });
}