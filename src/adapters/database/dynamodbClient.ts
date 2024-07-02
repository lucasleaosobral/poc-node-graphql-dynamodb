import * as dotenv from "dotenv";
import AWS from "aws-sdk";
import {awsConfig} from "../../configuration/awsConfig";
dotenv.config();

const dynamoDBClient = new AWS.DynamoDB({
    region: awsConfig.region,
    endpoint: awsConfig.endpoint,
})

const dynamoDB = new AWS.DynamoDB.DocumentClient({
    service: dynamoDBClient
})

export {dynamoDB};