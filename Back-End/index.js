const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Sample chat data
const chats = [
    {
        id: 1,
        user: 'Alice',
        message: 'Hello, how are you?',
        timestamp: '2025-06-07T10:00:00Z',
    },
    {
        id: 2,
        user: 'Bob',
        message: 'I am good, thanks! How about you?',
        timestamp: '2025-06-07T10:01:00Z',
    },
    {
        id: 3,
        user: 'Alice',
        message: 'Doing great, thanks for asking!',
        timestamp: '2025-06-07T10:02:00Z',
    },
];

app.post('/post/chats', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: 'Text is required' });
    }
    // simulate AI response or echo back
    const aiResponse = `Received your text: "${text}"`;
    console.log(text);
    res.status(200).json({ response: aiResponse });
});


app.get('/chats', (req, res) => {
    console.log('GET /chats endpoint was called');
    res.status(200).json({
        ok: true,
        message: 'Chat retrieved successfully!',
        chat: chats,
    });
});

app.post('/save', (req, res) => {
    console.log('POST /save endpoint was called');
    // In a real application, you would save the chat data to a database
    // Here we just send a success response
    res.json({ message: 'Chat saved successfully!' });
});

app.get('/auth/google', (req, res) => {
    console.log('GET /auth/google endpoint was called');
    //google sso
    const code = "hhdhdhddhdhhhhd" 
    res.redirect(`http://localhost:3000/v2/auth/callback?code=${code}`);
    // res.json({ message: 'Chat saved successfully!' });
});

app.get('/v2/auth/callback', (req, res) => {
    console.log('GET /v2/auth/callback endpoint was called');
    //google sso 
    console.log('Callback received with code:', req.query.code);
    const token = "nifirjijeijrowrjweoirfjerwoifjeoirej";
    res.redirect(`http://localhost:5173/auth/sso?token=${token}`);
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
