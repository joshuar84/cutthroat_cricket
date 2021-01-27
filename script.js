const containerElement = document.getElementById('game_container');
const names = document.getElementById('names');
const initialButtons = document.getElementById('start_controls')
const double = document.getElementById('double');
const triple = document.getElementById('triple');

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




const playerObjectsArrayMaker = array => {
    let arrayOfOjects = [];
    array.forEach((el) => {
        arrayOfOjects.push({name: el, score: 0})
    });
    return arrayOfOjects;
}

const game = {
    players: [],
    multipier: 1,
    doubleToggle: 0,
    tripleToggle: 0,
    double() {
        console.log(this.players);
        if (this.doubleToggle === 0 && this.tripleToggle === 1) {
            this.multipier = 2;
            this.doubleToggle = 1;
            this.tripleToggle = 0;
            double.style.background = "red";
            triple.style.background = "maroon";
        } else if (this.doubleToggle === 1 && this.tripleToggle === 0) {
            this.multipier = 1;
            this.doubleToggle = 0;
            double.style.background = "maroon";
        } else {
            this.multipier = 2;
            this.doubleToggle = 1;
            double.style.background = 'red';
        }
        
    },
    triple() {
        console.log(this.players);
        if (this.tripleToggle === 0 && this.doubleToggle === 1) {
            this.multipier = 3;
            this.doubleToggle = 0;
            this.tripleToggle = 1;
            double.style.background = "maroon";
            triple.style.background = "red";
        } else if (this.tripleToggle === 1 && this.doubleToggle === 0) {
            this.multipier = 1;
            this.tripleToggle = 0;
            triple.style.background = "maroon";
        } else {
            this.multipier = 3;
            this.tripleToggle = 1;
            triple.style.background = "red";
        }
    },

    startNewGame() {
        let turn = 0;
        let playerLength = this.players.length
        let curPlayer = 
    }
}

double.addEventListener("mousedown", e => {
    game.double();
});
triple.addEventListener("mousedown", e => {
    game.triple();
});

const startGame = () => {
    let inHTML = '';
    arrayOfColumns.forEach((el) => {
        inHTML += el;
    })
    containerElement.innerHTML = inHTML
    initialButtons.innerHTML = '';
    game.players = playerObjectsArrayMaker(arrayOfNames);
}