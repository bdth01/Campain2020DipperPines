let voteDipper = document.getElementById('VoteDipper');
let button = document.createElement('div');
button.innerHTML = "Sling sum mud!"
button.id = "Button"
voteDipper.appendChild(button)

button.addEventListener('click', ()=>{
  mudSling();
})

function mudSling() {



let selection = document.getElementById('yourmom');
selection.remove()

let selection2 = document.getElementById('VoteDipper');
selection2.innerHTML = "Don't vote Dipper Pines! >:("

let selection3 = document.getElementById('Fines');
selection3.innerHTML = "Dipper Pines would make a terrible president. BOOOOO!! 👎🏻"

let selection4 = document.getElementById('Clean');
selection4.innerHTML = "He will not keep the Pine Forests clean! He doesn't care!"

let selection5 = document.getElementById('Sleep');
selection5.innerHTML = "He doesn't care about the poor! He'S a grEEdY cApiTalIsT tHaT oNlY cArEs aBoUt mOnEy! 😤"

let newElement = document.createElement('img')
newElement.src = "https://i.kym-cdn.com/entries/icons/original/000/026/375/cover5.jpg"
newElement.id = "Meme"
selection2.appendChild(newElement)

let newElement2 = document.createElement('div')
newElement2.innerHTML = '🤡';
newElement2.id = 'clown';
document.body.appendChild(newElement2);

}
