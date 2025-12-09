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
            result = "CONFRONTO 🥊"
            break;
    }
    return result;
}

async function logRollResult(characterName,block, atribute,diceResult ){
    console.log(`🎲 o jogador ${characterName} rolou um dado de ${block} ${diceResult} + ${atribute} de atributo totalizando ${diceResult + atribute}`);
}
// function to show the game engine type of blocks and rounds
async function playRaceEngine(character1, character2){

    for(let round=1; round <=5; round++){
        console.log("\n=================================\n");
        console.log(`Rodada ${round}`); 

        let block = await getRandoBlock();
        console.log(`Bloco: ${block}`);
    

        let diceResult1= await diceRoll();
        let diceResult2= await diceRoll();

        let totalSkill1= 0;
        let totalSkill2= 0;
        // para confornto
        let powerResult1= 0;
        let powerResult2= 0;

        if(block === "RETA"){
            // armazena a soma do dado + habilidade do personagem
            totalSkill1= diceResult1 + character1.VELOCIDADE;
            totalSkill2= diceResult2 + character2.VELOCIDADE; 
            // apresenta o resultado do dado e habilidade
            await logRollResult(character1.NOME, "VELOCIDADE", diceResult1, character1.VELOCIDADE);
            await logRollResult(character2.NOME, "VELOCIDADE", diceResult2, character2.VELOCIDADE);

            if(totalSkill1 > totalSkill2){
                console.log(`${character1.NOME} marcou um ponto na corrida!`);
                character1.PONTOS += 1;
           }else if(totalSkill2 > totalSkill1){
                console.log(`${character2.NOME} marcou um ponto na corrida!`);
                character2.PONTOS += 1;
           }else{
               console.log(`Nenhum jogador marcou pontos nesta rodada.`);
           }

        }else if(block === "CURVA"){
            totalSkill1= diceResult1 + character1.MANOBRABILIDADE;
            totalSkill2= diceResult2 + character2.MANOBRABILIDADE; 

            await logRollResult(character1.NOME, "MANOBRABILIDADE", diceResult1, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, "MANOBRABILIDADE", diceResult2, character2.MANOBRABILIDADE);

            if(totalSkill1 > totalSkill2){
                console.log(`${character1.NOME} marcou o ponto em Manobrabilidade!`);
                character1.PONTOS += 1;
           }else if(totalSkill2 > totalSkill1){
                console.log(`${character2.NOME} marcou o ponto em Manobrabilidade!`);
                character2.PONTOS += 1;
           }else{
               console.log(`Nenhum jogador marcou pontos nesta rodada.`);
           }
           
        }else{
            powerResult1= diceResult1 + character1.PODER;
            powerResult2= diceResult2 + character2.PODER; 

            await logRollResult(character1.NOME, "PODER", diceResult1, character1.PODER);
            await logRollResult(character2.NOME, "PODER", diceResult2, character2.PODER);

           if(powerResult1 > powerResult2){
                console.log(`${character1.NOME} venceu o confronto!`);
                character1.PONTOS += 1;
                 if( powerResult1 > powerResult2 && character2.PONTOS >0){
               console.log(`${character2.NOME} perdeu 1 ponto por ter sido derrotado no confronto!`);
           }
           }else if(powerResult2 > powerResult1){
                console.log(`${character2.NOME} venceu o confronto!`);
                character2.PONTOS += 1;
                if( powerResult2 > powerResult1 && character1.PONTOS >0){
               console.log(`${character1.NOME} perdeu 1 ponto por ter sido derrotado no confronto! 🐢`);
           }
           } else{
               console.log(`Nenhum jogador marcou pontos nesta rodada.`);
           }
        }
       
    }
}
async function declareWinner(character1, character2){
    console.log("\n=================================\n");
    console.log(`🏆 Placar Final 🏆`);
    console.log(`${character1.NOME}: ${character1.PONTOS} pontos`);
    console.log(`${character2.NOME}: ${character2.PONTOS} pontos`);

    if(character1.PONTOS > character2.PONTOS){
        console.log(`🎉 O grande vencedor é ${character1.NOME}! Parabéns! 🎉`);
    } else if(character2.PONTOS > character1.PONTOS){
        console.log(`🎉 O grande vencedor é ${character2.NOME}! Parabéns! 🎉`);
    } else{
        console.log(`🤝 O jogo terminou em empate!! `);
    }

}
    // function main auto invoke
(async function main(){
    console.log(`Bem vindo ao jogo de confronto 🏁🚨!`);
    console.log("Escolhas os personagens para a corrida:");
    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})();
