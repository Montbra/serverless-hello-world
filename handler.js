'use strict';

module.exports.hello = async event => {

  let message = 'Hello World'
  const name = event.queryStringParameters && event.queryStringParameters.name

  if (name !== null) {
    message = 'Hello ' + name
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: message
      },
      null,
      2
    ),
  };
};
