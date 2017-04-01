export function initialize(appInstance) {
  let store = appInstance.lookup('service:store');

  store.push({
    data: [
      {
        id: 1,
        type: 'question',
        attributes: {
          question: 'Is your name Zach McGonigal?',
          answer: 'Yes'
        }
      },{
        id: 2,
        type: 'question',
        attributes: {
          question: 'Should you get this job?',
          answer: 'Yes'
        }
      }, {
        id: 3,
        type: 'question',
        attributes: {
          question: 'If you combine the words "may" and "be" together what do you get?',
          answer: 'Maybe'
        }
      }
    ]
  });
}

export default {
  name: 'preload',
  after: 'ember-data',
  initialize
};
