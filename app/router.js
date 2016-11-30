import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin', { path: "admin/:userName" });
  this.route('dashboard');
  this.route('user', { path: "user/:userName" });
});

export default Router;
