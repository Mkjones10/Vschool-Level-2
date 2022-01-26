const num = [1, 3, 5, 2, 90, 20]
num.sort((a,b) =>a-b)
console.log(num)
num.sort((a, b) => b-a)
console.log(num)
const words = ["dog", "wolf", "by", "family", "eaten"]
words.sort((c,d) => c.length-d.length)
console.log(words)
words.sort()
console.log(words)
const people =[
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }]
people.sort((j,k) => j.age - k.age)
console.log(people)