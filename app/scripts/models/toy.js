App.Toy = DS.Model.extend({
  name: DS.attr("string")
})

App.Toy.FIXTURES = [
  {
    id: 1,
    name: "Feathers on a string"
  },
  { 
    id: 2,
    name: "Teddy Bear"
  },
  {
    id: 3,
    name: "Catnip Mouse"
  }
  
]