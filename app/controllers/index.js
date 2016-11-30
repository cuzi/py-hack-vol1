import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login() {
      if (this.get('model.userName') === 'dashboard') {
        this.transitionToRoute('dashboard');
      }
      if (this.get('model.isAdmin')) {
        this.transitionToRoute('admin');
      }
      if (this.get('model')) {
        this.transitionToRoute('admin');
      }

    }
  }
});
