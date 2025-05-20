export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}

export async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    // Check if the response is ok (status code 200-299)
    const data = await response.json();
    return data;
}

export default function handler(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
}