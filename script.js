let form = document.querySelector('form')

form.addEventListener('submit', function(e) {

    e.preventDefault()

    let urlForm = "https://pokeapi.co/api/v2/pokemon/";

    let name = document.getElementById('name')

    urlForm = urlForm + this.name.value
    urlForm = urlForm.toLocaleLowerCase()

    let answer = document.getElementById('content')
    let image = document.getElementById('img-pokemon')

    let html = ''

    fetch(urlForm)
        .then(answer => answer.json())
        .then(function(data){
            html = 'Name: ' + uppercaseLetter(data.name) + '<br>'
            html = html + 'Type: ' + uppercaseLetter(data.types[0].type.name)
            answer.innerHTML = html


            image.innerHTML = '<img src="' + data.sprites.front_default +'"> <img src="' + data.sprites.back_default +'">'

        })

        .catch(function(error){
            if(error == 'SyntaxError: JSON.parse: unexpected character at line 1 column 1 of the JSON data'){
                html = 'Pokémon not found! 😢 <br> Check if the name or number is correct.'
            } else {
                html = error
            }

            answer.innerHTML = html
        })

});

function uppercaseLetter(val){
    return val[0].toUpperCase() + val.substr(1)
}