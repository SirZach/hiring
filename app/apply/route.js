import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  model() {
    let questions = this.store.peekAll('question');
    let applicationQuestions = questions.map((q) => {
      return this.store.createRecord('application-question', {
        question: q,
        answer: ''
      });
    });

    return this.store.createRecord('application', {
      applicationQuestions
    });
  }
});
