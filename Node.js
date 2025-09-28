const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Парсим JSON-тело запроса
app.use(express.json());

// Маршрут для Webhook
app.post('/webhook', (req, res) => {
    console.log('Received webhook:', req.body);
    // Тут можно обработать событие и сохранить его в базу данных или выполнить другие операции
    res.sendStatus(200); // Важно послать ответ 200, чтобы ЮMoney считала уведомление доставленным
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});