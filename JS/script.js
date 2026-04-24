$(document).ready(function(){


    console.log("ready!");
    const $cont = $("#monsterCont");
    const $loading = $("#loading");

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
                let species = usersArr[i].species
                    .toLowerCase()
                    .replace(/\s+/g, "-");

                let card = `
                <div class="col-xxl-3 col-md-4 col-sm-12 ${usersArr[i].id} ${species} ${locationClasses}">
                    <div class="card h-100 user-card shadow align-items center p-2">
                        <img src="Media/PlaceHolders.webp"
                                class="card-img-top user-img  p-3"
                                alt="${usersArr[i].id}">
                        <div class="card-body">
                            <h5 class="card-title">${usersArr[i].name}</h5>
                            <p class="card-text">${usersArr[i].species}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            `;

            $cont.append(card)
            }
        })
        .finally(function(){
            //ocultamos el mensaje de cargando...
            $loading.hide();
        })

        const $grid = $(".grid");

        const $buttons = $("#pAF, #pWW, #pRV, #pER, #pCH, #pReset");

        $buttons.on("click", function () {
            $buttons.removeClass("active");   // remove from all
            $(this).addClass("active");       // add to clicked one
        });

        const $AF = $("#pAF");
        const $WW = $("#pWW");
        const $RV = $("#pRV");
        const $ER = $("#pER");
        const $CH = $("#pCH");
        const $PR = $("#pReset");
        $AF.on("click", function(){
            $grid.isotope({ filter: '.ancient-forest' })
        });
        $WW.on("click", function(){
            $grid.isotope({ filter: '.wildspire-waste' })
        });
        $RV.on("click", function(){
            $grid.isotope({ filter: '.rotten-vale' })
        });
        $ER.on("click", function(){
            $grid.isotope({ filter: '.elders-recess' })
        });
        $CH.on("click", function(){
            $grid.isotope({ filter: '.coral-highlands' })
        });
        $PR.on("click", function(){
            $grid.isotope({ filter: '*' })
            $loading.hide();
        });

})