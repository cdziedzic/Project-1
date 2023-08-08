let buttonLinkEl = document.getElementById('title-image')
let modal = document.getElementById('modal-box')
let titleEl = document.getElementById('title')
let submitButton = document.getElementById('submit')
let inputValue = document.getElementById('input-box')

//open the modal
buttonLinkEl.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = "flex";

})

//close the modal and display title element
submitButton.addEventListener('click', function(event){
    event.preventDefault();
    modal.style.display = "none";
    titleEl.style.display = "block";
    titleEl.textContent = inputValue.value;

})

// display the quote on the poster (h1)
let savedQuote = localStorage.getItem("quote");

let displayQuote = document.getElementById("displayQuote")
if(savedQuote){
    displayQuote.textContent=savedQuote;
}