function showHome() {
    let content = document.querySelector('#content'); 
    let disp = document.createElement('div'); 
    disp.className = "disp"; 
    content.appendChild(disp); 

    let desc = document.createElement('div'); 
    desc.className = "homeDesc"; 
    desc.innerHTML = "A French Ass Restaurant, Since 1705."; 
    disp.appendChild(desc); 

    let elf = document.createElement('img');
    elf.src = "/src/frenchelves.jpeg"; 
    elf.className = "elf"; 
    disp.appendChild(elf);

    let words = document.createElement('div');
    words.className = "wordsHome";
    words.innerHTML = "Our Master Bakers in The Kitchen"
    disp.appendChild(words); 

    let imgBox = document.createElement('div'); 
    imgBox.className = "imgBox"; 
    disp.appendChild(imgBox);

    let cro = document.createElement('img'); 
    cro.className = "cro"; 
    cro.src = "/src/cro.jpg"; 
    imgBox.appendChild(cro); 

    let frBeef = document.createElement('img');
    frBeef.className = "cro"; 
    frBeef.src = "/src/frenchbeef.jpg"; 
    imgBox.appendChild(frBeef); 

    let crep = document.createElement('img');
    crep.className = "cro";
    crep.src = "/src/crepes.jpeg";
    imgBox.appendChild(crep); 

    let chz = document.createElement('img'); 
    chz.className = "cro";
    chz.src = "/src/cheese.jpg";
    imgBox.appendChild(chz); 

    let order = document.createElement('button');
    order.className = "order"; 
    order.innerHTML = "Order Now"; 
    disp.appendChild(order);
}

export default showHome