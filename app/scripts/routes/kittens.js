App.KittensRoute = Ember.Route.extend({
  model: function () {
    debugger;
    return this.store.find("kitten")
  }
})