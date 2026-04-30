$(document).ready(function(){

const $cont = $("#monsterCont");
const $grid = $(".grid");


fetch("https://mhw-db.com/monsters")
    .then(function(response){
        if(!response.ok){
            throw new Error ("Error al obtener los datos de la API")
        }
        return response.json();
    })
    .then(function(data){
        console.log(data);

        // let userData = data.results[0];

        
        let usersArr = data;

        for(let i=0; i<20; i++){
            let locations = usersArr[i].locations;
            let locationClasses = locations
                .map(loc => loc.name.toLowerCase().replace(/\s+/g, "-").replace(/'/g, ""))
                .join(" ");
            let species = usersArr[i].species;
                species = species.charAt(0).toUpperCase() + species.slice(1).toLowerCase();

            let card = `
            <div class="col-xxl-3 col-md-4 col-sm-12 ${usersArr[i].id} ${locationClasses}">
                <a href="wikiMonster.html?id=${usersArr[i].id}" class="text-decoration-none text-dark">
                    <div class="card h-100 user-card shadow align-items center p-2">
                        <img src="Media/img/${usersArr[i].id}.webp"
                                class="card-img-top monster-img user-img p-3"
                            alt="${usersArr[i].name}">
                        <div class="card-body">
                            <h5 class="card-title text-decoration-underline">${usersArr[i].name}</h5>
                            <p class="card-text">${species}</p>
                        </div>
                    </div>
                </a>
            </div>
        `;

        $cont.append(card)
        }
    })
    .finally(function(){
        $grid.isotope({ filter: '*' })
    })


            const $buttons = $(".pAF, .pWW, .pRV, .pER, .pCH, .pReset");
    const $DText = $(".dropdown-toggle");
    const $AF = $(".pAF");
    const $WW = $(".pWW");
    const $RV = $(".pRV");
    const $ER = $(".pER");
    const $CH = $(".pCH");
    const $PR = $(".pReset");
    $AF.on("click", function(){
        $grid.isotope({ filter: '.ancient-forest' })
        $buttons.removeClass("active");
        $AF.addClass("active");
        $DText.text("Ancient Forest");  
    });
    $WW.on("click", function(){
        $grid.isotope({ filter: '.wildspire-waste' })
        $buttons.removeClass("active");
        $WW.addClass("active");
        $DText.text("Wildspire Waste");  
    });
    $RV.on("click", function(){
        $grid.isotope({ filter: '.rotten-vale' })
        $buttons.removeClass("active");
        $RV.addClass("active");
        $DText.text("Rotten Vale");  
    });
    $ER.on("click", function(){
        $grid.isotope({ filter: '.elders-recess' })
        $buttons.removeClass("active");
        $ER.addClass("active");
        $DText.text("Elder's Recess");  
    });
    $CH.on("click", function(){
        $grid.isotope({ filter: '.coral-highlands' })
        $buttons.removeClass("active");
        $CH.addClass("active");
        $DText.text("Coral Highlands");  
    });
    $PR.on("click", function(){
        $grid.isotope({ filter: '*' })
        $buttons.removeClass("active");
        $PR.addClass("active");
        $DText.text("All");  
    });


});