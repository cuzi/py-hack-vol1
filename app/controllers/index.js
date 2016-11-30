import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login() {
      if (this.get('model.userName') === 'dashboard') {
        this.transitionToRoute('dashboard',this.get('model'));
      }
      else if (this.get('model.isAdmin')) {
        this.transitionToRoute('admin',this.get('model'));
      }
      else if  (true) {
        this.transitionToRoute('user', {this.get('model')} );
      }

    }
  }
});
