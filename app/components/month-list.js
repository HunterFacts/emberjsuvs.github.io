import $ from 'jquery';
import Component from '@ember/component';


export default Component.extend({
  bool: false,
  inter: 0,
  months: [{
      month: "january",
      name: "Январь"
    }, {
      month: "february",
      name: "Февраль"
    }, {
      month: "march",
      name: "Март"
    }, {
      month: "april",
      name: "Апрель"
    }, {
      month: "may",
      name: "Май"
    }, {
      month: "june",
      name: "Июнь"
    }, {
      month: "july",
      name: "Июль"
    }, {
      month: "august",
      name: "Август"
    }, {
      month: "september",
      name: "Сентябрь"
    }, {
      month: "october",
      name: "Октябрь"
    }, {
      month: "november",
      name: "Ноябрь"
    }, {
      month: "december",
      name: "Декабрь"
    }],
  actions: {
    countInter() {
      if ($('#edition option:selected').text() != "Выберите издание" && $('#year option:selected').text() != "Выберите год"){
        var monInt = 0;
        var montprice = $('#edition option:selected').attr('data-price');
        var price = 0;
        var count = 0;
        $('.mon').each(function () {
          if ($(this).prop('checked') == true){
            monInt++;
          }

        });
        if (monInt == 12){
          price = monInt * parseFloat(montprice) * 0.90;
          count = 10;
        }
        else if (monInt < 12 && monInt >= 6){
          price = monInt *  parseFloat(montprice) * 0.95;
          count = 5;
        }
        else {
          price = monInt *  parseFloat(montprice);
        }
          $('#dother').text("Ваша цена за подписку составляет " + price + 'руб. (Скидка '+count+'%)');

      }

    }
  }
});
