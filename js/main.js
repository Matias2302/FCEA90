/*=====NAVBAR COLOR=====*/

$(function () {
	$(document).scroll(function () {
	  var $nav = $("header");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
  });

/*======================*/

/*================video media query======================*/


/*======MODAL=======*/


// Get the modal
var modal = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video');
  
}


// When the user clicks the button, open the modal 
btn[0].onclick = function() {
   modal[0].style.display = "block";
}
btn[1].onclick = function() {
    modal[1].style.display = "block";
}
btn[2].onclick = function() {
    modal[2].style.display = "block";
}

//Modales de videos testimonios
btn[3].onclick = function() {
    modal[3].style.display = "block";
}
btn[4].onclick = function() {
    modal[4].style.display = "block";
}
btn[5].onclick = function() {
    modal[5].style.display = "block";
}
btn[6].onclick = function() {
    modal[6].style.display = "block";
}
btn[7].onclick = function() {
    modal[7].style.display = "block";
}
btn[8].onclick = function() {
    modal[8].style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
    modal[0].style.display = "none";    
    document.getElementById("player-video").contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
}
span[1].onclick = function() {
    modal[1].style.display = "none";
    document.getElementById("player-video2").contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
}
span[2].onclick = function() {
    modal[2].style.display = "none";
    document.getElementById("player-video3").contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
}
span[3].onclick = function() {
    modal[3].style.display = "none";
    document.getElementById("player-video4").contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
}
span[4].onclick = function() {
    modal[4].style.display = "none";
    document.getElementById("player-video5").contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
}
span[5].onclick = function() {
    modal[5].style.display = "none";
    document.getElementById("player-video6").contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    console.log("hola");
}
span[6].onclick = function() {
    modal[6].style.display = "none";
    document.getElementById("player-video7").contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
}
span[7].onclick = function() {
    modal[7].style.display = "none";
    document.getElementById("player-video8").contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
}
span[8].onclick = function() {
    modal[8].style.display = "none";
    document.getElementById("player-video9").contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*=============================*/

/*======otra manera===========*/
/*
const triggers = document.getElementsByClassName('trigger');
const triggerArray = Array.from(triggers).entries();
const modals = document.getElementsByClassName('modal');
const closeButtons = document.getElementsByClassName('btn-close');

for (let [index, trigger] of triggerArray) {
  const toggleModal = () => {
    modals[index].classList.toggle('show-modal');
  }
  trigger.addEventListener("click", toggleModal);
  closeButtons[index].addEventListener("click", toggleModal);
  console.log("hola");
}

document.addEventListener("click",function (event) {
		// If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
		if (
			event.target.matches('.btn-close') ||
			!event.target.closest(".modal")
		) {
			closeModal();
		}
	},
	false
);

function closeModal() {
	document.querySelector('.modal').style.display = 'none';
	console.log("hola, cerrate porfa");
}
*/