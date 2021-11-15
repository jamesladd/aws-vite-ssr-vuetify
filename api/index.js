'use strict'

module.exports.api = async (event) => {
  console.log('api', event, process.env)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v2.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  }
}
