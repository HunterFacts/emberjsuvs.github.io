import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      value: 1,
      data_id: 1,
      data_month: "1,3,4,5,6,11",
      name: 'Издательство Калан',
      price: 500
    }, {
      value: 2,
      data_id: 2,
      data_month: '',
      name: 'Уральский рабочий',
      price: 700
    }, {
      value: 3,
      data_id: 3,
      data_month: '6,7,12',
      name: 'Вечерняя газета',
      price: 900
    }, {
      value: 4,
      data_id: 4,
      data_month: '1,4,5',
      name: 'Утренняя газета',
      price: 150
    }];
  }
});
