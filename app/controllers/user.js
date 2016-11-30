import Ember from 'ember';

export default Ember.Controller.extend({

  callStatus: [
    {
      name: 'Just started',
      value:1
    },
    {
      name: 'A faw minutes ago',
      value:2
    },
    {
      name: 'Over 10 minutes',
      value:3
    },
    {
      name: 'Over 20 minutes',
      value:4
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
    submitRequest: function() {
      console.log('on submit')
      console.log(this.get('topic'))
      var request = this.store.createRecord('request', {
      topic: this.get('topic'),
      tier:this.get('tier'),
      description:this.get('desc'),
      status:this.get('callStatus.value'),
      c_id:this.get('Cid'),
      incident:this.get('incident'),
      start_time: new Date(),
      user: this.get('model')
      });
      request.save();
    }
,
    openModal(){
      this.set('modalShown', true)
    },
    closePromptDialog(){
          this.set('modalShown',false)
    }
  },

    updateUserDetail: (attr, sender) => {
          let r = '',
          uname = sender.get('userName');

          sender.store.query('user',{ filter: { userName: '*' }}).then(function(user) {
            sender.set(attr, user.findBy('userName', uname).get(attr));
      });
    },


});
