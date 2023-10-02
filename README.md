# SMS OTP Sender

This project demonstrates how to send one-time passcodes (OTPs) via SMS using Amazon Simple Notification Service (SNS). It includes a Node.js script that generates a random 6-digit OTP and sends it to a specified phone number.

## Prerequisites

Before running the script, ensure you have the following:

- [Node.js](https://nodejs.org/) installed on your machine.
- An AWS account with appropriate permissions to use the Simple Notification Service (SNS).
- AWS credentials (access key and secret key) stored as environment variables or in an AWS configuration file.
- A `.env` file containing necessary configuration, including phone number and AWS region.

## Setup

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/adanzweig/nodejs-aws-sns.git
    cd nodejs-aws-sns
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the project root and add the following:

    ```env
    REGION=us-east-1   # Replace with your desired AWS region
    AWS_ACCESS_KEY=your-access-key
    AWS_SECRET_KEY=your-secret-key
    ```

## Usage

Run the script to send an OTP via SMS:

```bash
npm start
```

The script will generate a random 6-digit OTP and send it to the specified phone number.

## Configuration

Adjust the parameters in the `.env` file to customize the SMS message, recipient phone number, and AWS region.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
