const x = [1, 2, 3, 4, 5, 6, 7, 8]
const double = x.map(function doubleNumbers(p){
    return p *2
  })
  console.log(double)
const a = x.map(function ok(b){
  return b.toString()

}) 
console.log(a)
const n = ["john" ,"amy", "suzan","smith"]
const q = n.map(function(k){
  return k.toUpperCase()
})
console.log(q)
const o =[
  {
      name: "Angelina Jolie",
      age: 80
  },
  {
      name: "Eric Jones",
      age: 2
  },
  {
      name: "Paris Hilton",
      age: 5
  },
  {
      name: "Kayne West",
      age: 16
  },
  {
      name: "Bob Ziroll",
      age: 100
  }]
const s = o.map(function(w){
  return w.name
})
console.log(s)
const yes = o.map(function(k){
  if (k.age > 21){
    return k.name + " can go to the Matrix!"
} else {
    return k.name + " is underage!"
}

})
console.log(yes)
const d = o.map(function(dom){
  console.log("<h1>"+dom.name+"</h1>" +"<h2>"+dom.age+"</h2>" )
})