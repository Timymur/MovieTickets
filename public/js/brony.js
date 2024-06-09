let Button = document.querySelector("#buy"); // Вытаскиваем имя кнопки для определения фильма.(Имя кнопки содержит название)
      let nameButton = Button.name; 


var cinemaHall1 = { // Массив с рядами
    row: [5, 7, 9, 9, 9, 9, 9]
  };
  var cinemaHallMap = '';  // пустой зал

  // перебираем все ряды
  for (var i = 0; i < cinemaHall1.row.length; i++) {
    
    // запомнили номер ряда
    var rowNumber = i + 1;
    // сколько мест в этом ряду
    var numberOfSeats = cinemaHall1.row[i];
    var cinemaHallRow = ''; // незаполненный ряд

    // перебираем места в ряду
    for (var j = 0; j < numberOfSeats; j++) {
      
      // запомнили номер текущего места
      var seatNumber = j + 1;
      
      let storageBuy = sessionStorage.getItem(nameButton+rowNumber+''+seatNumber);// storageSession хранит ключи от каждого места в каждом зале. ключ и занчение одинаковые и равны
                                                                                    // имени фильма ряда и места. например Avatar35
      //Если первое место то перед ним добавляем номер
      if (seatNumber === 1){
        if(storageBuy){ // Если есть storage c определенным индексом, то добавляем buyed
          cinemaHallRow +='<div class = "rowBefore ">Ряд: '+ rowNumber+'</div>'+ '<div class="seat buyed " data-row="' + // собираем места в ряду с учетом расстояния между сидениями.
          rowNumber + '" data-seat="' + // Записываем ноомер строки и номер сидения
          seatNumber + '">' + seatNumber + '</div>';
        }
        else{ //Иначе рисуем обычный 
          cinemaHallRow +='<div class = "rowBefore">Ряд: '+ rowNumber+'</div>'+ '<div class="seat " data-row="' + // собираем места в ряду с учетом расстояния между сидениями.
          rowNumber + '" data-seat="' + // Записываем ноомер строки и номер сидения
          seatNumber + '">' + seatNumber + '</div>';
        }
        
      }
      // Аналогично, для не первых элементов
      else{
        if(storageBuy){
          cinemaHallRow += '<div class="seat buyed" data-row="' + // собираем места в ряду с учетом расстояния между сидениями.
          rowNumber + '" data-seat="' + // Записываем ноомер строки и номер сидения
          seatNumber + '">' + seatNumber + '</div>';
        }

        else{
          cinemaHallRow += '<div class="seat" data-row="' + // собираем места в ряду с учетом расстояния между сидениями.
          rowNumber + '" data-seat="' + // Записываем ноомер строки и номер сидения
          seatNumber + '">' + seatNumber + '</div>';
        }
        
      }
    }
   

    cinemaHallMap += cinemaHallRow + '<div class="passageBetween">&nbsp;</div>'; // собираем ряды
  }
  
  //заполняем в html зал 
  $('.zal1').html(cinemaHallMap);
 
  
  // тут по клику определяем что место выбрано
  $('.seat').on('click', function(e) {

    if(e.currentTarget.classList.contains('buyed')){ // Если место выкуплено , то выдаем сообщение
      alert("Место забронировано");
    }

    else{
      
      // если первый раз кликнули билет выкупили, 
      // если повторно значит вернули билет
      $(e.currentTarget).toggleClass('buy');
      //показываем сколько билетов выкуплено

      showBuySeat();
    }
    
  });
  
  function showBuySeat() {
    result = '';
    //ищем все места купленные и показываем список выкупленных мест
    const elements = document.querySelectorAll('.buy'); // Ищем все элементы с классом buy
    for ( let el of elements){ // Перебирая эти элементы, мы создаем дивы, в которых указано, какие места выбраны
      result += '<div class="ticket">Ряд: ' +
      el.getAttribute('data-row') + ' Место:' +
      el.getAttribute('data-seat') + '</div>';
    }

    if (result==''){ // Если выбранных мест нет, то прячем кнопку забронировать
      let buttonBuy = document.querySelector('#buy');
      buttonBuy.style.visibility = 'hidden';
    }
    else{
      let buttonBuy = document.querySelector('#buy');
      buttonBuy.style.visibility = 'visible';
    }
    
    $('.result').html(result); // Показываем выбранные места

    $("#buy").on('click', function(){ // При нажатии на кнопку забронировать
       // Выбираем все выбранные места elements 88 строка
      for (let buyedTicket of elements){ // Перебираем их и записываем в storageSession. Ключ и значение одинаковы и равняются имени фильма номеру ряда и места
        sessionStorage.setItem(nameButton+buyedTicket.getAttribute('data-row')+''+buyedTicket.getAttribute('data-seat'), //Запись ключа имя,  номер строки и места
                                nameButton+buyedTicket.getAttribute('data-row')+''+buyedTicket.getAttribute('data-seat'));//Запись значения имя, номер строки и места
        buyedTicket.classList.remove('buy'); // Удаляем класс  buy
        
        location.reload(); // Обновляем страницу
        
      }
      remove =""; // Очищаем выбранные билеты
      
    })
  }

  
  
  
