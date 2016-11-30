import DS from 'ember-data';

export default DS.Model.extend({
    c_id:        DS.attr('string'),
    c_name:      DS.attr('string'),
    c_country:   DS.attr('string'),
    description: DS.attr('string'),
    topic:       DS.attr('string'),
    channel:     DS.attr('number'),
    status:      DS.attr('string'),
    req_time:    DS.attr('date'),
    start_time:  DS.attr('date'),
    end_time:    DS.attr('date'),
    user:        DS.belongsTo('user')
});
