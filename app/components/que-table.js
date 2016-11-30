import Ember from 'ember';

export default Ember.Component.extend({
    tagname: '',
    registerListener: Ember.observer('requests', function(){
        console.log(this.get('requests'));
    })
});
