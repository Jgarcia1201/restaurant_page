function showContact() {
    let content = document.querySelector('#content'); 
    let disp = document.createElement('div'); 
    disp.className= "disp";
    content.appendChild(disp);

    let phoneNum = document.createElement('p'); 
    phoneNum.className = "contWords"; 
    phoneNum.innerHTML = "Phone: 281-330-8004"; 
    disp.appendChild(phoneNum); 
    
    let addy = document.createElement('p'); 
    addy.className = "contWords"; 
    addy.innerHTML = "123 James Ave, Paris"; 
    disp.appendChild(addy);

    let map = document.createElement('img'); 
    map.className = "map";
    map.src = "/src/map.jpg"
    disp.appendChild(map); 
}

export default showContact