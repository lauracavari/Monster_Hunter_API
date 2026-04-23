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

            usersArr.forEach(function(userData){
                let card = `
                <div class="col-xxl-3 col-md-4 col-sm-12">
                    <div class="card h-100 user-card shadow align-items center p-2">
                        <img src="Media/PlaceHolders.webp"
                                class="card-img-top user-img  p-3"
                                alt="${userData.id}">
                        <div class="card-body">
                            <h5 class="card-title">${userData.name}</h5>
                            <p class="card-text">${userData.species}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            `;

            $cont.append(card);
            });
        })

})