import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('begin');
  this.route('apply');
  this.route('review');
  this.route('thank-you');
});

export default Router;
