// select button
var form = document['pest-form']

const submitBtn = document.getElementById("submit")
submitBtn.addEventListener('click', function(event){
    event.preventDefault()
    let goombaPrice = form.goomba.value * 5
    let bobombPrice = form.bobomb.value *7
    let cheapCheapPrice = form.cheap.value * 11
    let total = Number(goombaPrice) + Number(bobombPrice) +Number(cheapCheapPrice)
    const money = document.getElementById('input')
    money.textContent = total
        

})