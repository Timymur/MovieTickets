
document.addEventListener("click", (e) => {
    if( e.target.id){
        let id = e.target.id
        window.location.href=`/film/${id}`;
    }
})

