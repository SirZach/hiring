import DS from 'ember-data';
import ENV from 'hiring/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.API_URL
});
