export default function handler(req, res) {
  const myArray = ['apple', 'banana', 'orange'];
  res.status(200).json(myArray);
}
