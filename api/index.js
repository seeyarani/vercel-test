export default async function handler(req, res) {
  // Create query string from request parameters
  const queryString = new URLSearchParams(req.query).toString();

  // Define base URL
  const baseUrl = `https://script.google.com/macros/s/AKfycbxrQ1UyYtoXiZbzrUms1W9HuM7H-4652I0hhZLphPBC7TMTJYNeJKGSikLeNtGhq0jk/exec?${queryString}`;

  try {
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
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
