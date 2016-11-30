import Ember from 'ember';

export default Ember.Route.extend({
   user: Ember.inject.service(),
   model: function(params) {
        console.log(params.userName);
    }
  /*() {
       let user =  this.get('user').getUser();
       return user;
   }*/
    
   
});
