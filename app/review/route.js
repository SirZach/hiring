import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  model() {
    this.store.peekAll('application')
      .filter((application) => {
        let allMatch = true;

        application.get('applicationQuestions').forEach((aQ) => {
          if (aQ.get('answer') !== aQ.get('question.answer')) {
            allMatch = false;
          }
        });

        return allMatch;
      });
  }
});
