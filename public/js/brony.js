var cinemaHall1 = {
    row: [5, 7, 9, 9, 9, 9, 9]
  };
  var cinemaHallMap = '';

  // перебираем все ряды
  for (var i = 0; i < cinemaHall1.row.length; i++) {
    // запомнили номер ряда
    var rowNumber = i + 1;
    // сколько мест в этом ряду
    var numberOfSeats = cinemaHall1.row[i];
    var cinemaHallRow = '';
    // перебираем места в ряду
    for (var j = 0; j < numberOfSeats; j++) {

      // запомнили номер текущего места
      var seatNumber = j + 1;
      //Если первое место то перед ним добавляем номер
      if (seatNumber === 1){
        cinemaHallRow +='<div class = "rowBefore">Ряд: '+ rowNumber+'</div>'+ '<div class="seat " data-row="' + // собираем места в ряду с учетом расстояния между сидениями.
        rowNumber + '" data-seat="' + // Записываем ноомер строки и номер сидения
        seatNumber + '">' + seatNumber + '</div>';
      }

      else{
        cinemaHallRow += '<div class="seat" data-row="' + // собираем места в ряду с учетом расстояния между сидениями.
        rowNumber + '" data-seat="' + // Записываем ноомер строки и номер сидения
        seatNumber + '">' + seatNumber + '</div>';
      }
    }
   

    cinemaHallMap += cinemaHallRow + '<div class="passageBetween">&nbsp;</div>'; // собираем ряды
  }
  
  //заполняем в html зал номер 1
  $('.zal1').html(cinemaHallMap);
 
  
  // тут по клику определяем что место выкуплено
  $('.seat').on('click', function(e) {
    result = '';
    // если первый раз кликнули билет выкупили, 
    // если повторно значит вернули билет
    $(e.currentTarget).toggleClass('buy');
    //показываем сколько билетов выкуплено
    showBaySeat();
  });
  
  function showBaySeat() {
    result = '';
    //ищем все места купленные и показываем список выкупленных мест
    const elements = document.querySelectorAll('.buy');
    for ( let el of elements){
      result += '<div class="ticket">Ряд: ' +
      el.getAttribute('data-row') + ' Место:' +
      el.getAttribute('data-seat') + '</div>';
    }
    if (result==''){
      let buttonBuy = document.querySelector('#buy');
      buttonBuy.style.visibility = 'hidden';
    }
    else{
      let buttonBuy = document.querySelector('#buy');
      buttonBuy.style.visibility = 'visible';
    }
    
    $('.result').html(result);
  }


