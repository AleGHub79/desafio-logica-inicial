//Criando a variável para o nome do personagem
let nomeHeroi = "SutingaBoy"
let xpQnt = 0
let nivelHeroi = ""

xpQnt += 10005

if (xpQnt <= 1000){
    nivelHeroi = "Ferro"
    console.log("O heroi de nome " + nomeHeroi + " está no nível de " + nivelHeroi + "!")
}
else if (xpQnt > 1000 && xpQnt <= 2000){
    nivelHeroi = "Bronze"
    console.log("O heroi de nome " + nomeHeroi + " está no nível de " + nivelHeroi + "!")
}
else if (xpQnt > 2000 && xpQnt <= 5000){
    nivelHeroi = "Prata"
    console.log("O heroi de nome " + nomeHeroi + " está no nível de " + nivelHeroi + "!")
}   
else if (xpQnt > 5000 && xpQnt <= 7000){
    nivelHeroi = "Ouro"
    console.log("O heroi de nome " + nomeHeroi + " está no nível de " + nivelHeroi + "!")
}  
else if (xpQnt > 7000 && xpQnt <= 8000){
    nivelHeroi = "Platina"
    console.log("O heroi de nome " + nomeHeroi + " está no nível de " + nivelHeroi + "!")
}
else if (xpQnt > 8000 && xpQnt <= 9000){
    nivelHeroi = "Ascendente"
    console.log("O heroi de nome " + nomeHeroi + " está no nível de " + nivelHeroi + "!")
} 
else if (xpQnt > 9000 && xpQnt <= 10000){
    nivelHeroi = "Imortal"
    console.log("O heroi de nome " + nomeHeroi + " está no nível de " + nivelHeroi + "!")
}  
else{
    nivelHeroi = "Radiante"
    console.log("O heroi de nome " + nomeHeroi + " está no nível de " + nivelHeroi + "!")
}


