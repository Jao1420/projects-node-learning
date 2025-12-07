// declarando um objeto no javaScripit
const player1= {
    NOME: "Mario",
    VELOCIDADE: 4 ,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};
const player2= {
    NOME: "Luigi",
    VELOCIDADE: 3 ,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};
const player3= {
    NOME: "Peach",
    VELOCIDADE: 3 ,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTOS: 0,
};
const player4= {
    NOME: "Yoshi",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTOS: 0,
};
const player5= {
    NOME: "Bowser",
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
};
const player6= {
    NOME: "Donkey Kong",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
};

// simular um lançamento de dado 1 até 6
async function diceRoll(){
    // aqui iria de 0 até um 1 em decimal 
return Math.floor(Math.random() * 6) + 1;
}

// function type of game block
async function getRandoBlock(){
    let random= Math.random();
    let result

    switch(true){
        case random <0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO"
            break;
    }
    return result;
}

async function logRollResult(character1, diceResult, block, atribute){
    console.log(`o jogador ${character1.Nome} tirou dado de ${blocks} ${diceResult} no dado!`);

}
// function to show the game engine type of blocks and rounds
async function playRaceEngine(character1, character2){

    for(let round=1; round <=5; round++){
        console.log("=================================");
        console.log(`Rodada ${round}`); 

        let block = await getRandoBlock();
        console.log(`Bloco: ${block}`);
    

        let diceResult1= await diceRoll();
        let diceResult2= await diceRoll();

        let totalSkill1= 0;
        let totalSkill2= 0;

        if(block === "RETA"){
            totalSkill1= diceResult1 + character1.VELOCIDADE;
            totalSkill2= diceResult2 + character2.VELOCIDADE; 
            await logRollResult(character1.NOME, diceResult1, block, "VELOCIDADE");
           
        }else if(block === "CURVA"){
            totalSkill1= diceResult1 + character1.MANOBRABILIDADE;
           
            totalSkill2= diceResult2 + character2.MANOBRABILIDADE; 
           
        }else{
            totalSkill1= diceResult1 + character1.PODER;
           
            totalSkill2= diceResult2 + character2.PODER; 
           
        }
    }
}

// function main auto invoke
(async function main(){
    console.log(`Bem vindo ao jogo de confronto 🏁🚨!`);

    await playRaceEngine(player1, player2);
    // let jogada= await diceRoll();
    // console.log(`O jogador tirou ${jogada} no dado!`);
})();
