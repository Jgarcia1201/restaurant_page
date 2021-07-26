import createHead from "./head";
import showHome from "./home"; 
import showMenu from "./menu";
import showContact from "./contact"

createHead();
showHome(); 


let disp = document.querySelector('.disp');
let dispOn = true; 

// Home Button 
let navHome = document.querySelector('#homeNav');
navHome.addEventListener('click', () => {
    let disp = document.querySelector('.disp');
    if (dispOn == true) {
        disp.remove(); 
    }
    showHome();
    dispOn = true; 
});

// Menu Button 
let navMenu = document.querySelector('#menuNav'); 
navMenu.addEventListener('click', () => {
    let disp = document.querySelector('.disp');
    disp.remove();
    showMenu(); 
});

// Contact Button
let contMenu = document.querySelector('#contactNav'); 
contMenu.addEventListener('click', () => {
    let disp = document.querySelector('.disp');
    disp.remove(); 
    showContact(); 
}); 
