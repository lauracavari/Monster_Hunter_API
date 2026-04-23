$(document).ready(function(){


    console.log("ready!");
    const $cont = $("#monsterCont");

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
                let card = `
                <div class="col-xxl-3 col-md-4 col-sm-12">
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

            $cont.append(card);
            }
        })

})