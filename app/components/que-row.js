import Ember from 'ember';

export default Ember.Component.extend({
    tagname: '',
    timeFrom: Ember.computed('request.req_time', function() {
        var a = moment();//now
        var b = moment(this.get('request.req_time'));

        return a.diff(b, 'minutes') + "m";

    }),
    imageUrl: 'http://www.freeiconspng.com/uploads/warning-icon-png-1.png',
    rowClass: Ember.computed('request.channel', function() {
        return "md-3-line channel-" + this.get('request.channel');
    }),
    actions: {
        deleteRow() {
            this.set('request.status', 'canceled');

            this.get('request').save();
        }
    }
});
