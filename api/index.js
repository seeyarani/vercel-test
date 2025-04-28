// export default function handler(req, res) {
//   const myArray = ['spiderman', 'barbie', 'batman'];
//   res.status(200).json(myArray);
// }


export default async function handler(req, res) {
  // Create query string from request parameters
  const queryString = new URLSearchParams(req.query).toString();

  // Define base URL
  const baseUrl = `https://script.google.com/macros/s/AKfycbxrQ1UyYtoXiZbzrUms1W9HuM7H-4652I0hhZLphPBC7TMTJYNeJKGSikLeNtGhq0jk/exec?${queryString}`;

  // // Log the constructed URL
  // console.log(baseUrl);

  try {
    // Make GET request with a timeout of 600 ms (10 minutes in JavaScript is 600000 ms)
    const response = await fetch(baseUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 30000 // Timeout in milliseconds
    });

    // Parse the response as JSON
    const data = await response.json();

    // Return the JSON response
    return res.status(200).json(data);
    return data;
  } catch (error) {
    console.error('Error making request:', error);
    throw error; // Optionally handle the error further
  }

  res.status(200).json([]);
}
