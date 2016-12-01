import Ember from 'ember';

export default Ember.Component.extend({
    tagname: '',
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
