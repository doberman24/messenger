import express from 'express';
import cors from 'cors';

const PORT = 3000;
const HOST = 'localhost';

const server = express();

server.use(cors());

server.get('/', (req, res) => {
    // console.log(`GET - ${req.query.message}`);
    const message = getAnswer(req.query.message);
    res.send(message);
});

server.listen(PORT, HOST, (error) => {
    error ? console.log(error) : console.log(`Listen port ${PORT}`);
})

const getAnswer = (message) => {
    let answer = '';
    switch(message.toLowerCase()) {
        case 'привет!':
        case 'hello!':
        case 'привет':
        case 'hello':
            answer = 'И тебе привет!';
            break;
        case 'как дела?':
        case 'how do you do?':
        case 'как дела':
        case 'how do you do':
            answer = 'Дела отлично! Спасибо!';
            break;
        case 'чем занимаешься?':
        case 'чем занимаешься':
            answer = 'Да вот, сейчас с тобой общаюсь :)';
            break;
        default:
            answer = 'Я не понял, повтори пожалуйста!';
    }
    return answer
}