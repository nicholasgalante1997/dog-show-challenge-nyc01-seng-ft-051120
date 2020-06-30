document.addEventListener('DOMContentLoaded', () => {

fetch('http://localhost:3000/dogs')
.then(response => response.json())
.then(json => {
    
    renderRegDogs(json)
    

})


function renderRegDogs(json) {
    const table = document.querySelector('table')
    
    json.forEach(dog => {

   
    const newRow = document.createElement('tr')

        newRow.innerHTML = `
         <td>${dog.name}</td>
         <td>${dog.breed}</td> 
         <td>${dog.sex}</td> 
         <td><button>Edit</button></td>
         `

    table.appendChild(newRow)

    })
}

const eventHandler = document.addEventListener("click", e => {

    if (e.target.innerText === "Edit"){
        const wholeTableRow = e.target.parentNode.parentNode
        const updateForm = document.querySelector('form')
        const nameValue = updateForm.querySelector('input[name]')
        const breedValue = nameValue.nextElementSibling
        const sexValue = breedValue.nextElementSibling
        const dogName = wholeTableRow.querySelector('td')
        const dogBreed = dogName.nextElementSibling
        const dogSex = dogBreed.nextElementSibling
        
        nameValue.placeholder = dogName.innerText
        breedValue.placeholder = dogBreed.innerText
        sexValue.placeholder = dogSex.innerText
    } else if (e.target.innerText === "Submit"){
        fetch('http://localhost:3000/dogs')
        .then()
    }


})



})