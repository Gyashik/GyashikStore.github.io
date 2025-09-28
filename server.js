const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Парсим JSON-тело запроса
app.use(express.json());

// Маршрут для Webhook
app.post('/webhook', (req, res) => {
    console.log('Received webhook:', req.body);
    // Обрабатываем событие и сохраняем в базу данных или делаем другие операции
    res.sendStatus(200); // Важно ответить статусом 200, чтобы ЮMoney знала, что уведомление получено
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
