App.Kitten = DS.Model.extend({
  name: DS.attr("string"),
  toys: DS.hasMany("toy", {async: true})
})

App.Kitten.FIXTURES = [
  {
    id: 1,
    name: "Urchin Jr.",
    toys: [1,3]
  },
  {
    id: 2,
    name: "Siberian Husky",
    toys: [2]
  }
]