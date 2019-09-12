import AWS from 'aws-sdk';
import uuid from 'uuid';

AWS.config.update({
    region: "us-east-1",
    endpoint: 'dynamodb.us-east-1.amazonaws.com',
    accessKeyId: "#",
    secretAccessKey: "#"
});
var dynamodb = new AWS.DynamoDB.DocumentClient();

export default dynamodb;