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
        newRow.dataset.dogId = `${dog.id}`
        newRow.innerHTML = `
         <td>${dog.name}</td>
         <td>${dog.breed}</td> 
         <td>${dog.sex}</td> 
         <td><button>Edit</button></td>
         `
    table.appendChild(newRow)

    })
}

document.addEventListener("click", e => {
    e.preventDefault()
    console.log(event.target)
    const wholeTableRow = e.target.parentNode.parentNode
    const updateForm = document.querySelector('form')
    const nameValue = updateForm.querySelector('input[name]')
    const breedValue = nameValue.nextElementSibling
    const sexValue = breedValue.nextElementSibling
    const dogName = wholeTableRow.querySelector('td')
    const dogBreed = dogName.nextElementSibling
    const dogSex = dogBreed.nextElementSibling
    const dogId = wholeTableRow.dataset.dogId
    
    if (e.target.innerText === "Edit"){
        nameValue.placeholder = dogName.innerText
        breedValue.placeholder = dogBreed.innerText
        sexValue.placeholder = dogSex.innerText
        console.log(dogId)
    } 


})

document.addEventListener("Submit", e => {


    
        fetch(`http://localhost:3000/dogs/${dogId}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json',
                "Accept": "applcation/json"
            }, 
            body: JSON.stringify({
                    "name": `${nameValue[value]}`,
                    breed: `${breedValue[value]}`,
                    sex: `${sexValue[value]}`
            })
        })
        
    })
})
