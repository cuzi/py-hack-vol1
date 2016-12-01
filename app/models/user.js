import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    image: DS.attr('string'),
    userName: DS.attr('string'),
    name: DS.attr('string'),
    station: DS.attr('number'),
    isAdmin: DS.attr('boolean'),
    channel: DS.attr('string'),
    requests: DS.hasMany('request')
});
