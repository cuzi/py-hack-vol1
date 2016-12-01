import Ember from 'ember';
export default Ember.Controller.extend({
  cheanelString:  Ember.computed('model.channel', function() {
   if(this.get('model.channel') == '1'){
     return 'Chat';
   }else if(this.get('model.channel') == '2'){
     return 'Social Network ';
   }else if (this.get('model.channel') == '3'){
    return 'Email' ;
   }else{
       return 'Phone ' ;
   }
    // body
  }),
});
