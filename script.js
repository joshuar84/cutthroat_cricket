const containerElement = document.getElementById('game_container');
const names = document.getElementById('names');
const initialButtons = document.getElementById('initial_buttons')

let arrayOfColumns = [];
let arrayOfNames = [];

const addNames = () => {
    let newNames = '';
    arrayOfNames.forEach((el) => {
        newNames += el;
    });
    names.innerHTML = newNames;
}

const addPlayer = () => {
    const input = document.getElementById('name_input');
    const name = input.value;
    arrayOfColumns.push(`<div class="flex_item name column">
    <div id="name${name}" class="button flex_item name">${name}</div>
    <div id="score${name}" class="button flex_item score">0</div>
    <div id="20${name}" class="button flex_item">20</div>
    <div id="19${name}" class="button flex_item">19</div>
    <div id="18${name}" class="button flex_item">18</div>
    <div id="17${name}" class="button flex_item">17</div>
    <div id="16${name}" class="button flex_item">16</div>
    <div id="15${name}" class="button flex_item">15</div>
    <div id="bull${name}" class="button flex_item">BULL</div>
</div>`);
    arrayOfNames.push(`<h3 id="name_id">${name}</h3><br>`);
    addNames();
    input.value = '';
}


const startGame = () => {
    let inHTML = '';
    arrayOfColumns.forEach((el) => {
        inHTML += el;
    })
    containerElement.innerHTML = inHTML
    initialButtons.innerHTML = '';
    names.innerHTML = '';
}