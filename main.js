

function pega(){
    let poke = document.querySelector("#poke")
    let quantidade = Number(poke.value)
    fetch('https://pokeapi.co/api/v2/pokemon?limit=' + quantidade).then(response => response.json()).then(allpokemon => {
    
    let pokemons = []
    
    allpokemon.results.map((val)=>{
        
        
        fetch(val.url).then(response => response.json()).then(pokemoSigle =>{
            pokemons.push({nome:val.name,
                imagem:pokemoSigle.sprites.front_default
            })
            if(pokemons.length == quantidade){
                let res = document.querySelector(".pokemon-boxes")
                res.innerHTML = ""

                pokemons.map(function(val){
                    res.innerHTML += `
                    <div class="pokemon-box">
                    <img src="${val.imagem}" alt="poke">
                    <p>${val.nome}</p>
                    </div>
                    
                    
                    `

                })
            }
        })

    })

    

    
})

}


