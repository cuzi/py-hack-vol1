import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    image: DS.attr('string'),
    mail: DS.attr('string'),
    name: DS.attr('string'),
    station: DS.attr('number'),
    channel: DS.attr('string'),
    requets: DS.hasMany('request', { async: false }),
});
