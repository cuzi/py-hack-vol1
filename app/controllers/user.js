import Ember from 'ember';

export default Ember.Controller.extend({
  callStatus: [
    {
      name: 'Just started'
    },
    {
      name: 'A faw minutes ago'
    },
    {
      name: 'Over 10 minutes'
    },
    {
      name: 'Over 20 minutes'
    },
  ],
  showStatusSelect:  Ember.computed('model.channel', function() {
    return (this.get('model.channel') == '1' ||this.get('model.channel') == '4')
    // body
  }),
  actions: {
    logOut(){
      this.transitionToRoute('index' );
    },
    edit() {
      if (this.get('model.userName') === 'dashboard') {
        this.transitionToRoute('dashboard');
      }
      else if (this.get('model.isAdmin')) {
        this.transitionToRoute('admin');
      }
      else if  (true) {
        this.transitionToRoute('user' );
      }

    },
    SubmitCall() {
      if (this.get('model.userName') === 'dashboard') {
        this.transitionToRoute('dashboard',this.get('model'));
      }
      else if (this.get('model.isAdmin')) {
        this.transitionToRoute('admin',this.get('model'));
      }
      else if  (true) {
        this.transitionToRoute('user');
      }

    },
    openModal(){
      this.set('modalShown', true)
    },
    closePromptDialog(){
          this.set('modalShown',false)
    }
  }

});
