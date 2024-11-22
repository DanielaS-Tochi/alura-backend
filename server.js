import express from 'express';

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
    res.send('¡Hola desde mi servidor Node.js!');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});