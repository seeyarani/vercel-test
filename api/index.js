export default function handler(req, res) {
  const myArray = ['spiderman', 'barbie', 'batman'];
  res.status(200).json(myArray);
}
