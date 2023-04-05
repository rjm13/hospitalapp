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
const{ROLE_TABLE} = process.env;
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    //get all of the Roles in the app
    const params = {
        TableName : ROLE_TABLE,
        //FilterExpression : 'Year = :this_year',
        //ExpressionAttributes : {':this_year' : 2015}
    };

    const roles = await docClient.scan(params).promise();

    const activeShifts = roles.map((item) => {item.activeShifts.Items});
    console.log('Sending notification for ${activeShifts.length} shifts', JSON.stringify(activeShifts))

    await Promise.all(roles.map(role => role.peeps.Items.map(user => 
        user?.expoNotificationToken &&
        sendPushNotification(user.expoNotificationToken))))

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
