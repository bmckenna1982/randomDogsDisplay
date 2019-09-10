function watchForm() {
    $('.form-container').on('submit', '.dog-form', fetchDogs );    
}

function fetchDogs() {
    event.preventDefault();
    emptyDisplay();    
    let dogNum = $('.input-dogNum').val();
    if (dogNum > 0 && dogNum < 51) {
        fetch(`https://dog.ceo/api/breeds/image/random/${dogNum}`)
            .then(Response => Response.json())            
            .then(responseJson => displayDogs(responseJson))
            .catch(error => alert(`Something wet wrong. ${error}`));
        } else { alert("You must enter a number between 1 and 50")}

}

function logDogs(responseJson) {
    for (let dog in responseJson.message) {
        console.log(`${responseJson.message[dog]}`);
    }  
}

function emptyDisplay() {
    $('.dog-display').empty();
}

function displayDogs(responseJson) {
    // console.log(responseJson.message);
    logDogs(responseJson);
    let sectionHTML = ""    
    for (let dog in responseJson.message) {
    $('.dog-display').append(`<img src="${responseJson.message[dog]}" alt="random dog image">`)
    } 
    // let sectionHTML = ``
    }
    


$(watchForm);