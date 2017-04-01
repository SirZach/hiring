import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  model() {
    let applications = this.store.peekAll('application');

    return applications.toArray().filter((application) => {
      let allMatch = true;

      application.get('applicationQuestions').forEach((aQ) => {
        if (aQ.get('answer') !== aQ.get('question.answer')) {
          allMatch = false;
        }
      });
      debugger;

      return allMatch;
    });
  }
});
