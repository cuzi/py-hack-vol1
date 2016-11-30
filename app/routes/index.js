import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let user = this.store.createRecord("user");
        let invoiceSender = this.store.createRecord('request', {
            user: user
        });
        return user;
    },
    registerListener: function(){

    }.on('init'),
    actions:{
      login(){
        
      }
    }

});
