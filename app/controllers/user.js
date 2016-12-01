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
        console.log('on submit')
        console.log(this.get('topic'))
        var request = this.store.createRecord('request', {
        topic: this.get('topic'),
        tier:this.get('tier'),
        description:this.get('desc'),
        status:this.get('callStatus.value'),
        c_id:this.get('Cid'),
        incident:this.get('incident'),
        start_time: new Date().getTime(),
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
