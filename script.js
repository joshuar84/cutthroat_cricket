const containerElement = document.getElementById('game_container');
const names = document.getElementById('names');
const initialButtons = document.getElementById('start_controls')
const double = document.getElementById('double');
const triple = document.getElementById('triple');

let arrayOfColumns = [];
let arrayOfNames = [];
let nameArray = [];

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
    nameArray.push(name);
    addNames();
    input.value = '';
}




const playerObjectsArrayMaker = array => {
    let arrayOfOjects = [];
    array.forEach((el) => {
        arrayOfOjects.push({ name: el, score: 0, twenty: [], nineteen: [], eighteen: [], seventeen: [], sixteen: [], fifteen: [], bull: [], tally20: 0, tally19: 0, tally18: 0, tally17: 0, tally16: 0, tally15: 0, tallybull: 0 });
    });
    return arrayOfOjects;
}

const game = {
    players: [],
    multipier: 1,
    doubleToggle: 0,
    tripleToggle: 0,
    turn: 0,
    playerLength: 0,
    playerIndex: 0,
    currentObject: 0,
    double() {
        console.log(this.currentObject);
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
        console.log(this.currentObject);
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
    game.players = playerObjectsArrayMaker(nameArray);
    game.playerLength = game.players;
    game.currentObject = game.players[game.playerIndex];

}
const gameInProgress = () => {
    let currentScore = game.currentObject.score;
    let pts20 = 0;
    let pts19 = 0;
    let pts18 = 0;
    let pts17 = 0;
    let pts16 = 0;
    let pts15 = 0;
    let ptsbull = 0;
    let score = document.getElementById(`score${game.currentObject.name}`);
    let twenty = document.getElementById(`20${game.currentObject.name}`);
    let nineteen = document.getElementById(`19${game.currentObject.name}`);
    let eighteen = document.getElementById(`18${game.currentObject.name}`);
    let seventeen = document.getElementById(`17${game.currentObject.name}`);
    let sixteen = document.getElementById(`16${game.currentObject.name}`);
    let fifteen = document.getElementById(`15${game.currentObject.name}`);
    let bull = document.getElementById(`bull${game.currentObject.name}`);
    twenty.addEventListener('mousedown', () => {
        if (game.currentObject.tally20 >= 3) {
            game.currentObject.twenty.push(20 * game.multipier);
            game.currentObject.tally20 += game.multipier;
            let over = game.currentObject.tally20 - 3;
            let currentScore20 = over * 20;
            pts20 = currentScore20;
        } else if (game.currentObject.tally20 < 3) {
            game.currentObject.twenty.push(20 * game.multipier);
            game.currentObject.tally20 += game.multipier;
        }
        game.turn += 1;
    })
    nineteen.addEventListener('mousedown', () => {
        game.currentObject.nineteen.push(19 * game.multipier);
        game.currentObject.tally19 += game.multipier;
        game.turn += 1;
        console.log('19');
        if (game.currentObject.tally19 >= 3) {
            let over = game.currentObject.tally19 - 3;
            let currentScore19 = over * 19;
            pts19 = currentScore19;
        }
    })
    eighteen.addEventListener('mousedown', () => {
        game.currentObject.eighteen.push(18 * game.multipier);
        game.currentObject.tally18 += game.multipier;
        game.turn += 1;
        console.log('18');
        if (game.currentObject.tally18 >= 3) {
            let over = game.currentObject.tally18 - 3;
            let currentScore18 = over * 18;
            pts18 = currentScore18;
        }
    })
    seventeen.addEventListener('mousedown', () => {
        game.currentObject.seventeen.push(17 * game.multipier);
        game.currentObject.tally17 += game.multipier;
        game.turn += 1;
        console.log('17');
        if (game.currentObject.tally17 >= 3) {
            let over = game.currentObject.tally17 - 3;
            let currentScore17 = over * 17;
            pts17 = currentScore17;
        }
    })
    sixteen.addEventListener('mousedown', () => {
        game.currentObject.sixteen.push(16 * game.multipier);
        game.currentObject.tally16 += game.multipier;
        game.turn += 1;
        console.log('16');
        if (game.currentObject.tally16 >= 3) {
            let over = game.currentObject.tally16 - 3;
            let currentScore16 = over * 16;
            pts16 = currentScore16;
        }
    })
    fifteen.addEventListener('mousedown', () => {
        game.currentObject.fifteen.push(15 * game.multipier);
        game.currentObject.tally15 += game.multipier;
        game.turn += 1;
        console.log('15');
        if (game.currentObject.tally15 >= 3) {
            let over = game.currentObject.tally15 - 3;
            let currentScore15 = over * 15;
            pts15 = currentScore15;
        }
    })
    bull.addEventListener('mousedown', () => {
        game.currentObject.bull.push(25 * game.multipier);
        game.currentObject.tallybull += game.multipier;
        game.turn += 1;
        console.log('bull');
        if (game.currentObject.tallybull >= 3) {
            let over = game.currentObject.tallybull - 3;
            let currentScorebull = over * 25;
            ptsbull = currentScorebull;
        }

    });
    let allPoints = pts20;
    score.innerText = allPoints;
}
