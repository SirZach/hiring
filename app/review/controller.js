import Ember from 'ember';

const {
  Controller,
  computed,
  get,
  isEmpty
} = Ember;

export default Controller.extend({
  qualifiedApplications: computed('model.[]', function() {
    let applications = get(this, 'model');

    return applications.filter((application) => {
      let allMatch = true;

      application.get('applicationQuestions').forEach((aQ) => {
        if (aQ.get('answer') !== aQ.get('question.answer')) {
          allMatch = false;
        }
      });

      return allMatch;
    });
  }),

  nonQualifiedApplicationsCount: computed('qualifiedApplications.[]', 'model.[]', function() {
    let qualifiedApplicationsCount = get(this, 'qualifiedApplications.length');
    let applicationCount = get(this, 'model.length');

    if (!isEmpty(applicationCount) && !isEmpty(qualifiedApplicationsCount)) {
      return applicationCount - qualifiedApplicationsCount;
    } else {
      return 0;
    }
  })
});
