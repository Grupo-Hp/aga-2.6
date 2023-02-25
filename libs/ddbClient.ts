// Create service client module using ES6 syntax.
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {fromIni} from "@aws-sdk/credential-providers";

// Create an Amazon DynamoDB service client object.
const ddbClient = new DynamoDBClient({ 
    credentials: fromIni({profile: 'personal-account'})
 });
export { ddbClient };