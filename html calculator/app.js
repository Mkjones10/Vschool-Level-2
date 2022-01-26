const form = document['input']

const addButton = document.getElementById("add")


addButton.addEventListener('click', function(event){
    event.preventDefault()
    const add1 = form.addForm.value
    const add2 = form.addForms.value
    let addResult = Number(add1) + Number(add2) 
    const result = document.getElementById('result')

    result.textContent = addResult
   
})
const subButton = document.getElementById("subt")

subButton.addEventListener('click', function(event){
    const sub1 = form.subForm.value
    const sub2 = form.subForms.value
    let subResult = Number(sub1) - Number(sub2)
    const result2 = document.getElementById('result2')
    result2.textContent = subResult

})
const xButton = document.getElementById("mult")
xButton.addEventListener('click', function(event){
    const x1 = form.mulForm.value
    const x2 = form.mulForms.value
    let product = Number(x1) * Number(x2)
    const result3 = document.getElementById('result3')
    result3.textContent = product
})
