$(document).ready(function(){
    console.log("Online y con jQuery");

    const URLParams = new URLSearchParams(window.location.search);
    const monsterID = URLParams.get("id");

    const gameCont = $("#monsterDetailCont");

    fetch("https://mhw-db.com/monsters" + gameID)
        .then(function(response){
            return response.json();
        })
        .then(function(result){
            console.log(result);

            let gameData = result.data;
            let monsterDetailCont = `
                <div class="col-md-12 col-lg-4 text-center">
                    <img src="media/img/${gameID}.jpg" alt="${gameData.name}" class="img-fluid">
                </div>
                <div class="col-md-12 col-lg-8">
                    <h1>${gameData.name}</h1>
                    <p>${gameData.description}</p>
                </div>
            `

            gameCont.append(monsterDetailCont);
        })
        .catch(function(){

        })
        .finally(function(){

        })

        console.log(JSON.parse(localStorage.getItem('myObject')));

});