/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_HOSPITALAPP_GRAPHQLAPIIDOUTPUT
	API_HOSPITALAPP_GRAPHQLAPIENDPOINTOUTPUT
	ROLE_TABLE
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require("aws-sdk");
const https = require("https")
const{ROLE_TABLE, USER_TABLE} = process.env;
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    //get all of the Roles in the app
    const roleparams = {
        TableName : ROLE_TABLE,
        //FilterExpression : 'Year = :this_year',
        //ExpressionAttributes : {':this_year' : 2015}
    };

    //get all of the users in the app
    const userparams = {
        TableName : USER_TABLE,
        //FilterExpression : 'Year = :this_year',
        //ExpressionAttributes : {':this_year' : 2015}
    };

    const roles = await docClient.scan(roleparams).promise();

    //const users = await docClient.scan(userparams).promise();
    let scanResults = [];
    let users;

    do{
        users = await docClient.scan(userparams).promise();
        users.Items.forEach((item) => scanResults.push(item));
        userparams.ExclusiveStartKey  = users.LastEvaluatedKey;
    } while(typeof users.LastEvaluatedKey !== "undefined");

    console.log(scanResults)

    await Promise.all(scanResults.map(
        (user) => user?.Setting2 &&
        sendPushNotification(user.Setting2)))

    //filter roles.activeShifts by createdAt and status === open, in the last week

    //from that, find all of the shifts that were posted in the last week
    //count the number of the those shifts
    //if greater than 0, send push notification to every user in that role

    return "Finished";
};

async function sendPushNotification(expoPushToken) {
    const message = {
        to: expoPushToken,
        sound: "default",
        title: "Don't Forget!",
        body: "And here is the body!",
        data: {someData: "goes here"},
    };

    const options = {
        hostname: "exp.host",
        path: "/--/api/v2/push/send",
        method: "POST",
        port: 443, //replace with 80 for http requests
        headers: {
            Accept: "application/json",
            "Accept-encoding": "gzip, deflate",
            "Content-Type": "application/json",
        },
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let rawData = "";

            res.on("data", (chunk) => {
                rawData += chunk;
            });

            res.on("end", () => {
                try {
                    resolve(JSON.parse(rawData));
                } catch (err) {
                    reject(new Error(err));
                }
            });
        });

        req.on("error", (err) => {
            reject(new Error(err));
        });

        req.write(JSON.stringify(message));
        req.end();
    });
}
