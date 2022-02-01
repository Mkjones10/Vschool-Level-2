// const { default: axios } = require("axios")

// // URL(https://api.vschool.io/MaxineJones/todo)
const todoForm = document.formTodo
const title = todoForm.title
const description = todoForm.description
const price = todoForm.price
const image = todoForm.image
const todoc = document.getElementById('todo-container')

function getData(){
    axios.get("https://api.vschool.io/MaxineJones/todo")
    .then(response => listData(response.data))
    .catch(error => console.log(error))
}

function listData(data){
    for(let i = 0; i < data.length; i++){
        //makeOneToDo(data[i])
        console.log(data[i])
        const container = document.createElement('div')
        const h1 = document.createElement('h1')
        h1.textContent = data[i].title
        container.appendChild(h1)
        const p = document.createElement('p')
        p.textContent = data[i].description
        container.appendChild(p)
        const pr = document.createElement('h2')
        pr.textContent = data[i].price
        container.appendChild(pr)
        const img = document.createElement('img')
        
        if(data[i].imgUrl){
            img.src = data[i].imgUrl
        }
        container.appendChild(img)

        const complete = document.createElement('input')
        complete.setAttribute("type" ,"checkbox")
        container.appendChild(complete)
        complete.addEventListener('change', function(e){
            axios.put('https://api.vschool.io/MaxineJones/todo/'+data[i]._id, {completed: complete.checked}).then(response=>{
                if(complete.checked){
                    container.style.textDecoration = "line-through"
                    completed = true

                }
                else{
                    container.style.textDecoration ='none'
                    completed = false
                }
            })
            .catch(error=>console.log(error))
            
        }
        )

        document.getElementById('todo-container').appendChild(container)
        const deleteBtn = document.createElement('button')
        deleteBtn.innerHTML =`delete`
        deleteBtn.addEventListener('click', function(e){
            axios.delete('https://api.vschool.io/MaxineJones/todo/'+data[i]._id)
            .then(response=>document.getElementById('todo-container').removeChild(container))
            .catch(error=> console.log(error))

            

        })
        container.appendChild(deleteBtn)
    }
}

getData()
todoForm.addEventListener('submit', function(e){
    e.preventDefault()
    const todo = {
        title: title.value,
        description: description.value,
        price:price.value,
        imgUrl:image.value
    }
    axios.post('https://api.vschool.io/MaxineJones/todo', todo)
    .then(response => console.log(response))
        .catch(error => console.log(error))

})

    getData()
