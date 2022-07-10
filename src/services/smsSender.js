const axios = require('axios').default;

const accountSid = "AC5ee10acc448ecc1b758621425f67e4b3";

export const sendMessage = (message) => {

  const details = {
      To: message['Phone'],
      From: '+14842142282',
      Body: message['Message']
  };

  const formBody = [];
  for (var property in details) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + '=' + encodedValue);
  }
  const body = formBody.join('&');

  axios.post(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
       body ,
      {
          headers: {
              'Authorization': `Basic QUM1ZWUxMGFjYzQ0OGVjYzFiNzU4NjIxNDI1ZjY3ZTRiMzo4MjJiMzRiZGFiMWE3OTM3NDBhYTc5ZjZhOWZlZmEzZQ==`
          }
      })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      });
}


