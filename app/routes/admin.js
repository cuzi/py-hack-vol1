import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
        //return this.store.findAll('request');
        return this.store.query('request', {'status':  'pending'}).then((requests)=> {
           this.store.findAll('user');
         return requests;
       });
   }



});
