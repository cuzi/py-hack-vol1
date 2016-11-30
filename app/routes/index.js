import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    login(){
      console.log(this)
      if(name2.toLowerCase() == 'admin'){
        alert('ADMIN !');
      }
      else{
          alert('im not admin')
      }
    }
  }


});
