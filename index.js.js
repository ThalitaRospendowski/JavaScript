/* Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
*/


var readlineSync = require('readline-Sync');

function preparaprato(fopcao, ftempo, ftempopadrao){


   let tempo3 = (ftempopadrao * 3);
   let tempo2 = (ftempopadrao * 2);  
   
  /* console.log('Tempo multiplicado por 3 ' + tempo3);
   console.log('Tempo multiplicado por 2 ' + tempo2);
   console.log('Tempo ' + ftempo);
   console.log('Tempo padrao ' + ftempopadrao);*/



   if ( (ftempo) < (ftempopadrao)) {
      console.log('Tempo insuficiente')
   }   

   else if ((ftempo => ftempopadrao) && (ftempo < tempo2)) {
      console.log('Prato pronto, bom apetite!!!');
   }

   else if ((ftempo) >= (tempo2) && (ftempo < tempo3)) {
      console.log('A comida queimou')
   }

   else if ( (ftempo) >= (tempo3)) {    

      console.log('Kabum')
   } 
  
}


console.log(`

1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão); 

`);

let tempopadrao = 0;
let bPrato = 0;
let opcao = readlineSync.question('Escolha o prato que deseja preparar: ');

 if (opcao == 1) {
    tempopadrao = 10;    
 }
 else if (opcao == 2){
   tempopadrao = 8;
 }
 else if (opcao ==3){
   tempopadrao = 15;
 }
 else if (opcao ==4){
   tempopadrao = 12;
}
else if (opcao ==5){
   tempopadrao = 8;
}
 else {
    console.log(`Prato Inexistente!!`);
    bPrato = 1;
 }

 if (bPrato == 0) {
    let tempo = readlineSync.question('Escolha o tempo de preparo: ');
    preparaprato(opcao,tempo,tempopadrao);
 }
 

 
