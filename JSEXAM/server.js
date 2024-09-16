const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Подключаем статические файлы (HTML, JavaScript, изображения)
app.use(express.static('JSEXAM'));

app.get('/', (req, res) => {
  // Отправляем HTML-страницу
  res.sendFile(path.join(__dirname, 'JSEXAM', 'ApiKinoExam.html'));
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
