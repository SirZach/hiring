import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  model() {
    return this.store.findAll('question')
      .then((questions) => {
        let applicationQuestions = questions.map((q) => {
          return this.store.createRecord('application-question', {
            question: q,
            answer: ''
          });
        });

        return this.store.createRecord('application', {
          applicationQuestions
        });
      });
  }
});
