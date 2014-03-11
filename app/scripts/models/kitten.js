App.Kitten = DS.Model.extend({
  name: DS.attr("string"),
  lastName: DS.attr("string"),
  fullName: function () {
    return this.get("name") + " " + this.get("lastName")
  }.property("name", "lastName"),
  toys: DS.hasMany("toy", {async: true})
})

App.Kitten.FIXTURES = [
  {
    id: 1,
    name: "Urchin",
    lastName: "Jr.",
    toys: [1,3]
  },
  {
    id: 2,
    name: "Siberian",
    lastName: "Husky",
    toys: [2]
  }
]