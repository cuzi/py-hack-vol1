import Ember from 'ember';

export default Ember.Controller.extend({
  userDetect: Ember.observer('userName', function() {
      let r = '',
          uname = this.get('userName'),
          _this = this;
          this.store.query('user',{ filter: { userName: '*' }}).then(function(user) {
            _this.set('isUser', !!user.findBy('userName', uname));
          });

  }),
  userImage: Ember.computed('isUser', function() {
      if (! this.get('isUser')) {
        return 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png'
      }
      return this.get('image');
  }),
  updateUserDetails: Ember.observer('isUser', function() {
    if (this.get('isUser')) {
      this.updateUserDetail('image', this);
      this.updateUserDetail('isAdmin', this);
      this.updateUserDetail('name', this);
    }

  }),  

  updateUserDetail: (attr, sender) => {
        let r = '',
        uname = sender.get('userName');

        sender.store.query('user',{ filter: { userName: '*' }}).then(function(user) {
          sender.set(attr, user.findBy('userName', uname).get(attr));
        });
  },
  actions: {
    login() {
      if (this.get('userName') === 'dashboard') {
        this.transitionToRoute('dashboard');
      }
      else if (this.get('isAdmin')) {
        this.transitionToRoute('/admin/' + this.get('userName'));
      }
      else if  (this.get('isUser')) {
       this.store.query('user', {'userName':  this.get('userName')}).then((users) => {
         let user =  users.findBy('userName', this.get('userName'));
         user.setProperties( {
            station: this.get('station'),
            channel: this.get('channel')
          }
         );
         user.save();
        this.transitionToRoute('/user/' + this.get('userName'));
       });
      }

    }
  }
});
