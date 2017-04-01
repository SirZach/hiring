import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  applicationQuestions: DS.hasMany('application-question')
});
