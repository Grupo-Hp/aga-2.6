require('dotenv').config()

export const AwsCredencials = {
    AwsConfig: {
        "region": process.env.DYNAMO_REGION,
        "endpoint": process.env.DYNAMO_ENDPOINT,
        "accessKeyId": process.env.DYNAMO_USER, 
        "secretAccessKey": process.env.DYNAMO_PASS
    }
}
