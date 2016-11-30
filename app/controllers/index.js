import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login() {
      if (this.get('model.userName') === 'dashboard') {
        this.transitionTo('dashboard');
      }
      if (this.get('model.isAdmin')) {
        this.transitionTo('admin');
      }
      if (this.get('model')) {
        this.transitionTo('admin');
      }

    }
  }
});
