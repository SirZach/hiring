import Ember from 'ember';

const {
  Controller,
  get
} = Ember;

export default Controller.extend({
  questions: [],

  currentStep: 0,

  actions: {
    saveModel() {
      let model = get(this, 'model');

      model.save()
        .then(() => {
          this.transitionToRoute('thank-you');
        });
    }
  }
});
