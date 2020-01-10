const ATJAUNOT = 5000;

async function lasiChatu(){
    const atbilde = await fetch('/chats/lasi');
    const datuObjekts = await atbilde.json();
    raadiChatuVienkarsi(datuObjekts);

}

function raadiChatuVienkarsi(dati){
    let jaunaRinda = "</br"
    let chats = ""
    let chataDiv = document.getElementById("chats");

    for (let rinda of dati['chats']){
        chats = chats + rinda + jaunaRinda;
    }

}

chataDiv.innerHTML = chats;
