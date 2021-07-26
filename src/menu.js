function showMenu() {
    let content = document.querySelector('#content'); 
    let disp = document.createElement('div'); 
    disp.className = "disp"; 
    content.appendChild(disp);

    let menuHead = document.createElement('div');
    menuHead.className = "menuHead";
    menuHead.innerHTML = "Menu"; 
    disp.appendChild(menuHead);

    let menuImg = document.createElement('img');
    menuImg.className = "menuImg"; 
    menuImg.src = "/src/frenchmenu.jpg"; 
    disp.appendChild(menuImg); 
}

export default showMenu