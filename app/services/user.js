import Ember from 'ember';
import config from '../config/environment';


export default Ember.Service.extend({
    ajax: Ember.inject.service(),
    store: Ember.inject.service(),
    createUser() {
        let user = this.get('store').createRecord("user");
        let invoiceSender = this.get('store').createRecord('request', {
            user: user
        });
        
        this.set('user', user);
        return user;
    },
    getUser() {
        let user = this.get('user');
        return user;
    },
    addRequest(request) {
        this.get('user.requests').push(request);
    },
    user: null
});