const ATJAUNOT = 1000;
async function lasiChatu(){
    const atbilde = await fetch("/chats/lasi");
    const datuObjekts = await atbilde.json();
    raadiChatuVienkaarshi(datuObjekts);
}
function raadiChatuVienkaarshi(dati){
    const jaunaRinda =  "</br>";
    let chats = "";
    let chataDiv = document.getElementById("chats");
    for (let rinda of dati["chats"]){
        chats = chats + rinda + jaunaRinda;
    }
    chataDiv.innerHTML = chats;
}
async function abc(){
    let zinjasElements = document.getElementById('zinja');
    let zinja = zinjasElements.value ;

    const atbilde = await fetch('/chats/suuti', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"chats": zinja})
    });

  const datuObjekts = await atbilde .json();
  
  raadiChataRindas(datuObjekts);
 
}

let ievadesLauks = document.getElementById("zinja");
ievadesLauks.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        abc();
    }
})

function raadiChataRindas(dati) {
    const chatUL = document.getElementById("chat");
    // novaacam ieprieksheejo saturu
    while (chatUL.firstChild) {
        chatUL.firstChild.remove();
    }
    for (let rinda of dati["messages"]) {
      chatLI = izveidoJaunuRindu(rinda);
      chatUL.appendChild(chatLI);
    }
    // noskrolleejam uz leju pie peedeejaa chata texta
    var chatScrollBox = chatUL.parentNode;
    chatScrollBox.scrollTop = chatScrollBox.scrollHeight;
  }
  
  
  function izveidoJaunuRindu(zinja) { 
    let newLI = document.createElement("li");
    newLI.className = "left clearfix"
    let newDiv = document.createElement("div"); 
    newDiv.className = "chat-body clearfix"
    let newContent = document.createTextNode(zinja); 
    newLI.appendChild(newDiv); 
    newDiv.appendChild(newContent); 
    return newLI;
  }