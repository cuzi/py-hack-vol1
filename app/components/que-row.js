import Ember from 'ember';

export default Ember.Component.extend({
    tagname: '',
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
