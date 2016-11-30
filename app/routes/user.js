import Ember from 'ember';

export default Ember.Route.extend({
   user: Ember.inject.service(),
   model() {
       let user =  this.get('user').getUser();
       return user;
   }
    
   
});
