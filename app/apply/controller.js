import Ember from 'ember';

const {
  Controller
} = Ember;

export default Controller.extend({
  questions: [],

  actions: {
    saveModel() {
      this.transitionToRoute('thank-you');
    }
  }
});
