// Load environment variables from a .env file
require('dotenv').config();

// Import required AWS SDK modules for SNS (Simple Notification Service)
const { SNSClient, PublishCommand } = require('@aws-sdk/client-sns');

// Asynchronous function to send an SMS message using AWS SNS
async function sendSMSMessage(sns, params) {
    // Create a new PublishCommand with the specified parameters
    const command = new PublishCommand(params);
    
    // Send the SMS message using the SNS client and the created command
    const message = await sns.send(command);
    
    // Return the result of the message sending operation
    return message;
}

// Main asynchronous function (IIFE) to send an SMS message
(async () => {
    // Define parameters for the SMS message
    const params = {
        Message: `Your OTP code is: ${Math.random().toString().substring(2, 8)}`, // Generate a 6-digit OTP code
        PhoneNumber: '', // Recipient's phone number from environment variables
        MessageAttributes: {
            'AWS.SNS.SMS.SenderID': {
                'DataType': 'String',
                'StringValue': 'String'
            }
        }
    };

    // Create an SNS client with the specified configuration
    const sns = new SNSClient({
        region: process.env.REGION, // AWS region from environment variables
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY, // AWS access key from environment variables
            secretAccessKey: process.env.AWS_SECRET_KEY // AWS secret key from environment variables
        }
    });

    // Send the SMS message using the defined SNS client and parameters
    await sendSMSMessage(sns, params);
})();
