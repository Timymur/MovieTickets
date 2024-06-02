
document.addEventListener("click", (e) => { // Отслеживаем нажатие на кнопку и передаем id  с названием фильма в url
    if( e.target.id){
        let id = e.target.id
        window.location.href=`/film/${id}`;
    }
})

