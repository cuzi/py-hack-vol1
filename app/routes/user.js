import Ember from 'ember';

export default Ember.Route.extend({
  user: {
    userName: ''
  },
  model: function(params) {

       return this.store.query('user', {'userName':  params.userName}).then((users) => {
           this.store.findAll('request');
         return users.findBy('userName', params.userName);
       });
   }



});
