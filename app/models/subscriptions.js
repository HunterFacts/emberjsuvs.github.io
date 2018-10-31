import DS from 'ember-data';

export default DS.Model.extend({
  value: DS.attr('number'),
  data_id: DS.attr('number'),
  data_month: DS.attr('string'),
  name: DS.attr('string'),
  price: DS.attr('number')
});
