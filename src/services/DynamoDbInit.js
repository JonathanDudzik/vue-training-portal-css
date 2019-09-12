import AWS from 'aws-sdk';
import uuid from 'uuid';

AWS.config.update({
    region: "us-east-1",
    endpoint: 'dynamodb.us-east-1.amazonaws.com',
    accessKeyId: "AKIA3ULZLKO5J3BKRYMP",
    secretAccessKey: "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"
});
var dynamodb = new AWS.DynamoDB.DocumentClient();

export default dynamodb;