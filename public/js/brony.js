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

      cinemaHallRow += '<div class="seat" data-row="' + // собираем места в ряду с учетом расстояния между сидениями.
        rowNumber + '" data-seat="' + // Записываем ноомер строки и номер сидения
        seatNumber + '">' + seatNumber + '</div>';
    }
    cinemaHallMap += cinemaHallRow + '<div class="passageBetween">&nbsp;</div>'; // собираем ряды
  }
  
  //заполняем в html зал номер 1
  $('.zal1').html(cinemaHallMap);
  // тут по клику определяем что место выкуплено
  $('.seat').on('click', function(e) {
    // если первый раз кликнули билет выкупили, 
    // если повторно значит вернули билет
    $(e.currentTarget).toggleClass('bay');
    //показываем сколько билетов выкуплено
    showBaySeat();
  });
  
  function showBaySeat() {
    result = '';
    //ищем все места купленные и показываем список выкупленных мест
    $.each($('.seat.bay'), function( item) {
      result += '<div class="ticket">Ряд: ' +
        $(item).data().row + ' Место:' +
        $(item).data().seat + '</div>';
    });
  
    $('.result').html(result);
  }