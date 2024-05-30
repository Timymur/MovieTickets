const express = require("express"); // Подключение к фраймворку express js

const app = express();

app.set("view engine", "ejs"); //Установка шаблонизатора

app.use(express.urlencoded({extended: false})); // для корректного получения данных из формы 

app.use(express.static('public')); // указание папки , в которой хранятся статические файлы. css , js


app.get("/", (req, res )=>{ // При переходе на главную страницу запускаем файл index.html
    res.render( "index"); 
}) 

app.get("/afisha", (req, res )=>{ 
    res.render( "afisha"); 
}) 


app.get("/film/:filmname", (req, res )=>{
    let fs = require("fs"); // подключение модуля файловой системы
    let text = fs.readFileSync(__dirname + `/public/text/${req.params.filmname}.txt`, 'utf-8'); // Запись в переменную данных из файла, название которого берем из переданных пользователем данных
    data = { //Запись всех передаваемых данных
        filmname: req.params.filmname,
        text: text
    };
    res.render( "film", data); 
})






app.listen(3000, ()=>{ //Запуск сервера
    console.log("SERVER STARTED");
})