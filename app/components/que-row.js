import Ember from 'ember';

export default Ember.Component.extend({
    tagname: '',
    actions: {
        deleteRow() {
            this.set('request.status', 'canceled');
        }
    }
});
