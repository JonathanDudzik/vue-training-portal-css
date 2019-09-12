import AWS from 'aws-sdk';
import uuid from 'uuid';

AWS.config.update({
    region: "us-east-1",
    endpoint: 'dynamodb.us-east-1.amazonaws.com',
    accessKeyId: "#",
    secretAccessKey: "#"
});

  /* 
     Uncomment the following code to configure Amazon Cognito and make sure to 
     remove the endpoint, accessKeyId and secretAccessKey specified in the code above. 
     Make sure Cognito is available in the DynamoDB web service region (specified above).
     Finally, modify the IdentityPoolId and the RoleArn with your own.
  */
/*
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
IdentityPoolId: "us-west-2:12345678-1ab2-123a-1234-a12345ab12",
RoleArn: "arn:aws:iam::123456789012:role/dynamocognito"
});
*/

var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();

export default dynamodb;