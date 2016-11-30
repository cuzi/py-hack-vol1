import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login() {
      if (this.get('model.userName') === 'dashboard') {
        this.transitionToRoute('dashboard');
      }
      else if (this.get('model.isAdmin')) {
        this.transitionToRoute('admin');
      }
      else if  (true) {
        this.transitionToRoute('user' );
      }

    }
  }
});
