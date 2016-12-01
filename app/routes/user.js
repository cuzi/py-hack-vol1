import Ember from 'ember';

export default Ember.Route.extend({
  user: {
    userName: ''
  },
  model: function(params) {

       return this.store.query('users', {'userName':  params.userName}).then(function(users) {
           this.store.findAll('request')
         return users.findBy('userName', params.userName);
       });
   }



});
