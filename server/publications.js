Meteor.publish('userPresence', function() {
  var filter = { userId: { $exists: true }};
  return Meteor.presences.find(filter, {fields: {state: true, userId: true}});
});

Meteor.publish('directory', function() {
  return Meteor.users.find();
});

Meteor.publish('state', function() {
  return State.find();
});

Meteor.publish('stateFormData', function() {
  return StateFormData.find();
});