class heroDoDesafio{
    constructor (nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    
    atack(){
        let tipoAtaque
        switch(this.tipo){
            case "guerreiro":
                tipoAtaque = "espada"
                break
            case "mago":
                tipoAtaque = "magia"
                break
            case "monge":
                tipoAtaque = "artes marciais"
                break
            case "ninja":
                tipoAtaque = "shuriken"
                break
            default:
                console.log("É necessário escolher o tipo de heroi!")
            }
        console.log(`O ${this.tipo} atacou usando ${tipoAtaque}`)    
    }
}

let novoHeroDesafio1 = new heroDoDesafio("Arthur",35,"guerreiro")
let novoHeroDesafio2 = new heroDoDesafio("Rasputin",80,"mago")
let novoHeroDesafio3 = new heroDoDesafio("Shaolin",30,"monge")
let novoHeroDesafio4 = new heroDoDesafio("Himura",26,"ninja")

novoHeroDesafio1.atack()
novoHeroDesafio2.atack()
novoHeroDesafio3.atack()
novoHeroDesafio4.atack()