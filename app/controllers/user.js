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
  }),
  actions: {
    logOut(){
      this.transitionToRoute('index' );
    },
    cancelCall(){

    },
    updateUserDetails() {
      this.store.query('user', {'userName':  this.get('userName')}).then((users) => {
        let user =  users.findBy('userName', this.get('userName'));
        user.setProperties( {
            station: this.get('model.station'),
            channel: this.get('model.channel')
          }
        );
        user.save();
       });
      this.send('closePromptDialog');
    },
    submitRequest: function() {

      var request = this.store.createRecord('request', {
        topic: this.get('topic'),
        tier:this.get('tier'),
        channel: this.get('model.channel'),
        description:this.get('desc'),
        call_status:this.get('callSelectedStatus.value'),
        c_id:this.get('Cid'),
        status:"pending",
        incident:this.get('incident'),
        start_time: new Date(),
        user: this.get('model')
      });
      request.save();
      this.set('topic', '');
      this.set('tier', null);
      this.set('desc', '');
      this.set('Cid', '');
      this.set('callSelectedStatus.value', '');
    },
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
