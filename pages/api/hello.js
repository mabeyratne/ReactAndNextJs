export async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({ text: 'Hello' });
    } else if (req.method === 'POST') {
        const { email, password, name } = req.body;
        // You can do something with email, password, name here
        res.status(200).json({ message: 'Data received', email, name });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
