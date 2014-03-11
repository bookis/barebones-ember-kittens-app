App.KittensRoute = Ember.Route.extend({
  actions: {
    deleteKitten: function (kitten) {
      kitten.deleteRecord();
      kitten.save();
    },
    hoverKitten: function (kitten) {
      console.log("I hovered " + kitten.get("name"))
    }
  },
  model: function () {
    return this.store.find("kitten")
  }
})