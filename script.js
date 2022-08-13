// Age In Days Logic

curYear = 2022;
set = document.getElementById("input");
function see() {
    var getbirthyear = prompt("What Year Were You Born?");
    var Agecalc = (curYear - getbirthyear) * 365;
    set.innerHTML = "Your Age In Days Is: " + Agecalc + " Days";
    //console.log(Agecalc);
}

function unsee() {
    set.innerHTML = " "
}

// Cat GIF Generator Logic
function GetCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-con-cat');
    image.src = "http://thecatapi.com/api/images/get?format&type=gif&size=small";

    div.appendChild(image);
}

// Rock, Paper Scissors Logic
function Game(Human) {
    
    var HumanChoice , ComputerChoice;
    HumanChoice = Human.id
    //console.log(HumanChoice)
    
    ComputerChoice = digitstochoice([computerdigits()]);
    //console.log(ComputerChoice)

    results = resultcheck(HumanChoice, ComputerChoice);
    console.log(results);

    message = output(results);
    console.log(message);

    display(HumanChoice.id, ComputerChoice, message);
}

function computerdigits() {
    return Math.floor(Math.random() * 3);
}
function digitstochoice(number) {
    var botinarray = ['rock','paper','scissors'];
    return botinarray[number];
}

function resultcheck(HumanChoice, ComputerChoice) {
    var logic = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
    };

    var HumanScore = logic[HumanChoice][ComputerChoice];
    var ComputerScore = logic[ComputerChoice][HumanChoice];

    return [HumanScore,ComputerScore];
}

function output([HumanScore, ComputerScore]) {
    if (HumanScore === 0) {
        return {'message': 'You Lost!', 'color': 'red'};
    }else if (HumanScore === 0.5) {
        return {'message': 'You Tied!', 'color': 'orange'};
    }else {
        return {'message': 'You Won!', 'color': 'green'};
    }
}

function display(HumanImgChoice, ComputerImgChoice, output) {
    var storeImg = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var DivHuman = document.createElement('div');
    var DivComputer = document.createElement('div');
    var DivMessage = document.createElement('div');

    DivHuman.innerHTML = "<img src'" + storeImg[HumanImgChoice] + "' height = 150 width = 150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    DivMessage.innerHTML = "<h1 style='color: " + output['color'] + ": font-size: 60px; padding: 30px; '>" + output['message'] + "</h1>"
    DivComputer.innerHTML = "<img src'" + storeImg[ComputerImgChoice] + "' height = 150 width = 150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";

    document.getElementById('flex-box-rps').appendChild(DivHuman);
    document.getElementById('flex-box-rps').appendChild(DivMessage);
    document.getElementById('flex-box-rps').appendChild(DivComputer);
}

function reload() {
    return location.reload("con-3");
}

// Color Changer Logic
let buttonstore = document.getElementsByTagName('button');
//console.log(buttonstore)

var originalcopy = [];
for (let i =0;  i < buttonstore.length; i++) {
    originalcopy.push(buttonstore[i]);
}
//console.log(originalcopy)

function BtnColorChange(trigger) {
    if (trigger.value === "red") {
        BtnRed();
    }else if (trigger.value === "green") {
        BtnGreen();
    }else if (trigger.value === "reset") {
        BtnReset();
    }else if (trigger.value === "random") {
        BtnRandom();
    }
}

function BtnRed() {
    for (let i = 0; i < buttonstore.length; i++) {
        buttonstore[i].classList.remove(buttonstore[i].classList[1]);
        buttonstore[i].classList.add("btn-danger");
       
    }
}
function BtnGreen() {
    for (let i = 0; i < buttonstore.length; i++) {
        buttonstore[i].classList.remove(buttonstore[i].classList[1]);
        buttonstore[i].classList.add("btn-success");
       
    }
}
function BtnReset() {
    for (let i = 0; i < buttonstore.length; i++) {
        buttonstore[i].classList.remove(buttonstore[i].classList[1]);
        buttonstore[i].classList.add(originalcopy[i]);
        
    }
}
function BtnRandom() {
    let choice = ['btn-primary', 'btn-success', 'btn-danger', 'btn-warning'];

    for (let i = 0; i < buttonstore.length; i++) {
        let index = Math.floor(Math.random() * 4);
        let choose = choice[index];
        buttonstore[i].classList.remove(buttonstore[i].classList[1]);
        buttonstore[i].classList.add(choose);
        
    }
    
}