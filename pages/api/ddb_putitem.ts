// Import required AWS SDK clients and commands for Node.js
import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "../../libs/ddbClient";

const params = {

  TableName: "CONTACT_AGA_SITE",
  Item: {
    'ID': { S: 'id' },
    'NOME': { S: 'name' },
    'EMAIL': { S: 'email' },
    'TELEFONE': { S: 'phone' },
    'ASSUNTO': { S: 'subject' },
    'MENSAGEM': { S: 'message' }
  },
};

const run = async () => {
  try {
    const data = await ddbClient.send(new PutItemCommand(params));
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
run();
