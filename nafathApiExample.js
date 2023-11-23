const axios = require('axios');

const SP_API_KEY = 'e99d32c8-1a30-4e85-9dfd-775dfbf7e9c2'; 
const NAFATH_API_KEY = 'e99d32c8-1a30-4e85-9dfd-775dfbf7e9c2'; 
const TARGET_USER_ID = 1002189981; 

async function sendRequest() {
  try {
    const response = await axios.post('https://www.iam.gov.sa/nafath/', {
      Action: 'SpRequest',
      Parameters: {
        service: '<Service_Type>',
        id: TARGET_USER_ID,
      },
    }, {
      headers: {
        Authorization: `ApiKey ${SP_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Send Request Response:', response.data);
    return response.data.transId; // Return transaction ID for the next API call
  } catch (error) {
    console.error('Send Request Error:', error.response.data);
    throw error;
  }
}

async function checkRequestStatus(transId, random) {
  try {
    const response = await axios.post('https://www.iam.gov.sa/nafath/', {
      Action: 'CheckSpRequest',
      Parameters: {
        transId: transId,
        id: TARGET_USER_ID,
        random: random,
      },
    }, {
      headers: {
        Authorization: `ApiKey ${SP_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Check Request Status Response:', response.data);
    return response.data.status; // Return the request status
  } catch (error) {
    console.error('Check Request Status Error:', error.response.data);
    throw error;
  }
}

async function postServiceRequestStatus(transId, status) {
  try {
    const response = await axios.post('https://SP_URL', {
      response: '<JWT_BASE64>',
      accessToken: '<User_Info_Access_Token>',
    }, {
      headers: {
        Authorization: `ApiKey ${NAFATH_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Post Service Request Status Response:', response.data);
  } catch (error) {
    console.error('Post Service Request Status Error:', error.response.data);
    throw error;
  }
}

// Example usage
(async () => {
  try {
    const transId = await sendRequest();
    const requestStatus = await checkRequestStatus(transId, '<Random_Value_from_Send_Request>');
    console.log('Request Status:', requestStatus);

    // Assuming 'COMPLETED' status for demonstration purposes
    if (requestStatus === 'COMPLETED') {
      await postServiceRequestStatus(transId, 'COMPLETED');
    }
  } catch (error) {
    console.error('API Error:', error.message);
  }
})();
