let rankingPlayer = calculaPartidasRanking(102,0)


function calculaPartidasRanking(nrVitoria, nrDerrota){
    const resultado = nrVitoria - nrDerrota
    let nivelHeroi

    if (resultado <= 10){
        nivelHeroi = "Ferro"
    }
    else if (resultado <= 20){
        nivelHeroi = "Bronze"    
    }
    else if (resultado <= 50){
        nivelHeroi = "Prata"  
    }
    else if (resultado <= 80){
        nivelHeroi = "Ouro"  
    }
    else if (resultado <= 90){
        nivelHeroi = "Diamante"   
    }
    else if (resultado <= 100){
        nivelHeroi = "Lendário"   
    }
    else {
        nivelHeroi = "Imortal"   
    }
    return console.log("O Heroi tem saldo de " + resultado + " e está no nivel de " + nivelHeroi + "!")
}