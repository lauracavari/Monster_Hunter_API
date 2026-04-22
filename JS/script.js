$(document).ready(function(){

    console.log("ready!");
    const $cont = $("#userCont");

    fetch("https://randomuser.me/api/")
        .then(function(response){
            if(!response.ok){
                throw new Error ("Error al obtener los datos de la API")
            }
            return response.json();
        })
        .then(function(data){
            
            console.log(data.results[0]);

            let userData = data.results[0];

            let card = `
            <div>
                <img src="${userData.picture.large}" alt="">
                
            </div>
            `;

            $cont.append(card);

        })

});