let casualCliked = false;
let summerCliked = false;
let womenClicked = false;
let menClicked = false;
let partyClicked = false;
let designClicked = false;

function clicked() {
    
}


document.getElementById('hci_catagory').addEventListener('click', function() {
    let targetedElement = event.target;
    console.log(targetedElement);
}, false);