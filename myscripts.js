let player1 = {
    name: "LeSunshine James",
    team: "LA Lakers",
    draftYear: 2003,
    link: "https://media1.tenor.com/m/gnZcXcBonfUAAAAC/you-are-my-sunshine-lebron.gif"
}

//console.log(player1.name);

let player2 = {
    name: "Stephen Curry",
    team: "GS Warriors",
    draftYear: 2009,
    link: "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png"
}

//console.log(player2.name);

// Variables for html
// result
let result = document.querySelector(".result");
// button
let add = document.querySelector(".add");
//holders
let name = document.querySelector(".nameInput");
let team = document.querySelector(".teamInput");
let draft = document.querySelector(".draftInput");
let link = document.querySelector(".pIinput");



//array for players
let players = [player1, player2]
// console.log(players)



//function to get info
function getplayer() {
    let nameInput = name.value;
    //console.log(nameInput);
    let teamInput = team.value;
    //console.log(teamInput);
    let draftInput = draft.value;
    //console.log(draftInput);
    let pIinput = link.value;
    console.log(pIinput);

    let newPlayer = {
        name: nameInput,
        team: teamInput,
        draftYear: draftInput,
        link: pIinput
    }

    players.push(newPlayer);
    console.log(newPlayer);

};


//function to add
function buildroster() {

    players.forEach(function (player) {
        result.insertAdjacentHTML("beforeend",
            `
            <div class="player">
                <div class="pimg">
                    <img class="imgholder" src="${player.link}">
                </div>

                <div class="holders">
                    <p class="nholder">${player.name}</p>
                    <p class="tholder">${player.team}</p>
                    <p class="yholder">${player.draftYear}</p>
                </div>

            </div>
             `
        );
        // console.log(player.name);

    });

};


//function to clear
function clearscreen() {
    result.innerHTML = "";

};


buildroster();
add.onclick = function () {
    clearscreen();
    getplayer();
    buildroster();


};
