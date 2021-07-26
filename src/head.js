function createHead() {
    let content = document.querySelector('#content');
    let headBox = document.createElement('div'); 
    headBox.className = "headBox"; 
    content.appendChild(headBox);

    let title = document.createElement('h1'); 
    title.innerHTML = "Le Petite Croissant"; 
    title.className = "title"; 
    headBox.appendChild(title); 

    let nav = document.createElement('div');
    nav.className = "nav"; 
    headBox.appendChild(nav); 

    let home = document.createElement('a');
    home.className = "navItem";
    home.id = "homeNav";  
    home.innerHTML = "Home"; 
    nav.appendChild(home); 

    let menu = document.createElement('a');
    menu.className = "navItem";
    menu.id = "menuNav"; 
    menu.innerHTML = "Menu"; 
    nav.appendChild(menu); 

    let contact = document.createElement('a');
    contact.className = "navItem"; 
    contact.id = "contactNav"; 
    contact.innerHTML = "Contact"; 
    nav.appendChild(contact);

    // Background
    let back = document.createElement('div'); 
    back.className = "back"; 
    content.appendChild(back); 
}


export default createHead; 