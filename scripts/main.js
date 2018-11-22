  
      
var myImage = document.querySelector('img');



myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/FuFu-round.gif') {
      myImage.setAttribute ('src','images/1529070837751.jpg');
    } else {
      myImage.setAttribute ('src','images/FuFu-round.gif');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myButton.onclick = function() {
  setUserName();
}


function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    /* myHeading.textContent = 'Mozilla is cool, ' + myName + "  Content"; */
}      

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}


/* setUserName(); */
   