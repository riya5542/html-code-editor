// Fetch Save Button
var saveButton = document.getElementById('run');



// Add Event Listener to the Button
saveButton.addEventListener('click',function(){
    // Fetch Output Container
    var output = document.getElementById('output-container');
    
    //fetch Input Container
    var input = document.getElementById('html-code');

    // fetch HTML Code from input container
    var htmlCode = input.value;

    // Put HTML Code value in Output Container
    output.innerHTML = htmlCode;
})

function copy(){
    let copyArea = document.querySelector("right");
    let text = document.getElementById("html-code");
    text.select();
    document.execCommand("copy");
    document.getElementById("copy");
}