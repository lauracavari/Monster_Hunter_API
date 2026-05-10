$(document).ready(function(){
    console.log("Online y con jQuery");

    const URLParams = new URLSearchParams(window.location.search);
    const monsterID = URLParams.get("id");

    const gameCont = $("#monsterDetailCont");

    fetch("https://mhw-db.com/monsters/" + monsterID)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);


            
            let gameData = data;

            let species = data.species;
            species = species.charAt(0).toUpperCase() + species.slice(1).toLowerCase();

            let type = data.type;
            type = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();

            //★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★

            let locationsText = Array.isArray(data.locations) 
                ? data.locations.map(function(loc) { 
                    return loc.name || loc; 
                }).join(", ")
                : "No disponible";

            let weaknessesText = Array.isArray(data.weaknesses)
                ? data.weaknesses.map(function(w) {
                    return w.element + " (" + w.stars + "★)";
                }).join(", ")
                : "No disponible";

            //★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★

            let infoMonster = `
            <div class="row row-cols-1 row-cols-md-2 justify-content-center g-4">

            <div class="col justify-content-center ">
                <div class="card mb-3 custom-navbar h-100">
                    <div class="imgWikiMonster">
                        <img src="Media/img/${data.id}.webp" class="w-50 card-img-top h-10" alt="imagen" >
                        <div class="card-body text-center align-self-center">
                        <h5 class="card-title">Nombre del monstruo: ${data.name}</h5>
                        <h5 class="card-subtitle">Tipo: ${species}</h5>
                        </div>                    
                    </div>
    
                </div>
            </div>

            <div class="col">
                <div class="card mb-3 custom-navbar h-100">
                    <div class="card-body custom-navbar">
                        <h6>Descripción</h6>
                        <p>${data.description }</p>
                    </div>
                </div>
            </div>
            
            <div class="col">
                <div class="card mb-3 custom-navbar h-100">
                    <div class="card-body custom-navbar">
                            <h6>Localizaciones y Recompensas</h6>
                            <p>${locationsText}</p>
                            <p>Más líneas de información.</p>
                    </div>
                </div>
            </div>

            <div class="col">
                    <div class="card mb-3 custom-navbar h-100">
                        <div class="card-body custom-navbar">
                            <h6>Debilidades</h6>
                            <p>${weaknessesText}</p>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
            `

            gameCont.append(infoMonster);
        })
        .catch(function(){

        })
        .finally(function(){
        $(".loader-wrapper").delay(400).fadeOut("slow");
        $("body").removeClass("preload");
    })

});

/*
            <div class="col-md-6">
                <div class="card mb-3 custom-navbar">
                    <img src="Media/Fondo_MonsterHunterWorld.jpg" class="card-img-top" alt="imagen">
                    <div class="card-body">
                        <h5 class="card-title">Nombre del monstruo:</h5>
                        <h5 class="card-subtitle">Tipo:</h5>
                    </div>
                </div>

                <div class="card custom-navbar">
                    <div class="card-body custom-navbar">
                        <h6>Descripción</h6>
                        <p>Más información organizada en bloques. Aquí se hablará del hábitat o de lo que come.Más información organizada en bloques. Aquí se hablará del hábitat o de lo que come.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card mb-3 custom-navbar">
                    <div class="card-body custom-navbar">
                        <h6>Localizaciones y Recompensas</h6>
                        <p>Texto descriptivo.</p>
                        <p>Más líneas de información.</p>
                    </div>
                </div>

                <div class="card custom-navbar">
                    <div class="card-body custom-navbar">
                        <h6>Debilidades</h6>
                        <p>Texto adicional.</p>
                        <p>Más contenido aquí.</p>
                    </div>
                </div>
            </div>




            `
                <div class="col-md-12 col-lg-4 text-center">
                    <img src="Media/img/${monsterID}.jpg" alt="${gameData.name}" class="img-fluid">
                </div>
                <div class="col-md-12 col-lg-8">
                    <h1>${gameData.name}</h1>
                    <p>${gameData.description}</p>
                </div>
            `
*/