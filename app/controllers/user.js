import Ember from 'ember';

export default Ember.Controller.extend({

  callStatus: [
    {
      name: 'Just started',
      value:1
    },
    {
      name: 'Over 10 minutes',
      value:2
    },
    {
      name: 'Over 20 minutes',
      value:3
    },
    {
      name: 'Over 30 minutes',
      value:4
    },
  ],
  showStatusSelect:  Ember.computed('model.channel', function() {
    return (this.get('model.channel') == '1' ||this.get('model.channel') == '4')
    // body
  }),
  requestsChanged:  Ember.observer('model.requests', function() {
    // this.store.query('user', {'userName':  this.get('model.userName')}).then((users) => {
    //     let user =  users.findBy('userName', this.get('model.userName'));
    //     user.setProperties( {
    //         station: this.get('model.station'),
    //         channel: this.get('model.channel')
    //       }
    //     );
    //     user.save();
    //    });
    // body
  }),
  cheanelString: Ember.computed('model.channel', function() {
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
        req_time: new Date(),
        user: this.get('model')
      });
      request.save();
      this.set('topic', '');
      this.set('tier', null);
      this.set('desc', '');
      this.set('Cid', '');
      this.set('callSelectedStatus.value', '');
      this.set('incident', '');
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