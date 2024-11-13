var listaProdutos = [[0,'Caixa son','cx.jpg','A banana da quitanda é especial! Estamos te esperando...',false,'3,44'],
[1,'Camera wi-fi','can.jpg','O café da quitanda é especial! Estamos te esperando...',false,'5,55'],
[2,'Fone laraja','acessorios.jpg','A batata da quitanda é especial! Estamos te esperando...',false,'6,00'],
[3,'Hardphone','fone.avif','O brócolis da quitanda é especial! Estamos te esperando...',false,'10,52'],
[4,'Fone JBL','hard.jpg','O figo da quitanda é especial! Estamos te esperando...',false,'0,85'],
[5,'Fone com Microphone','music.jpg','O macarrão da quitanda é especial! Estamos te esperando...',false,'0,85'],
[6,'Acessorios','pcp.avif','O morango da quitanda é especial! Estamos te esperando...',false,'4,23'],
[7,'Phone','phone.jpg','O tomate da quitanda é especial! Estamos te esperando...',false,'3,00']]

var carrinho = [];

window.onload = function(){
    montarCardProdutos();
}

function montarCardProdutos(){
    
    document.getElementById("divProdutos").innerHTML = "";

    for (var i = 0;i<listaProdutos.length;i++){        
        var conteudo = "";        
        conteudo += '<div class="card">';
        conteudo += `<img src="img/${listaProdutos[i][2]}" class="photo">`;
        conteudo += '<div class="legenda">';
        conteudo += `<h2>${listaProdutos[i][1]}</h2>`;
        conteudo += listaProdutos[i][3];
        if(listaProdutos[i][4] == false){
            conteudo += '</div>';
            conteudo += `<button onclick="preço(${listaProdutos[i][0]})">preço</button>`;
            conteudo += '</div>';
        }
        else{
            conteudo += '</div>';
            conteudo += `<button class="comprado">Comprado</button>`;
            conteudo += '</div>';

        }

       
        document.getElementById("divProdutos").innerHTML += conteudo;
    } 
}

function comprar(id){

    listaProdutos[id][4] = true;

    carrinho.push(listaProdutos[id]);

    window.localStorage.setItem("carrinho",JSON.stringify(carrinho));

    montarCardProdutos();
}


