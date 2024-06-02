const express = require("express"); // Подключение к фраймворку express js

const app = express(); // создание приложения через expres js

app.set("view engine", "ejs"); //Установка шаблонизатора

// app.use(express.urlencoded({extended: false})); // для корректного получения данных из формы 

app.use(express.static('public')); // указание папки , в которой хранятся статические файлы. css , js, картинки


app.get("/", (req, res )=>{ // При переходе на главную страницу запускаем файл index.html
    res.render( "index"); 
}) 

app.get("/afisha", (req, res )=>{ 
    res.render( "afisha"); 
}) 


app.get("/film/:filmname", (req, res )=>{ // динамическая страница с названиями фильма
    data = { //Запись всех передаваемых данных
        filmname: req.params.filmname, //Вытаскиваем название фильма из url, который приняли из id кнопки 
    };
    res.render( "film", data); // Передаем данные на страничку
})


app.listen(3000, ()=>{ //Запуск сервера
    console.log("SERVER STARTED");
})