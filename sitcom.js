'use strict';

const btnGen = document.querySelector('.btn');
const answer = document.querySelector('.answer');
let watch = '';

function sitcomGen(){
    const random = Math.trunc(Math.random()*10)+1;

    switch(random){
        case 1: watch = "Modern Family";
        break;
        case 2: watch = "How I Met Your Mother";
        break;
        case 3: watch = "It's Always Sunny In Philedelphia";
        break;
        case 4: watch = "The Office";
        break;
        case 5: watch = "Parks N Rec";
        break;
        case 6: watch = "Arrested Development";
        break; 
        case 7: watch = "The Big Bang Theory";
        break;
        case 8: watch = "Malcolm In The Middle";
        break;
        case 9: watch = "Community";
        break;
        case 10: watch = "Friends";
        break;
        
    }

    console.log(`Today you should watch ${watch}`);


    answer.textContent = `Today you should watch "${watch}"`;

    }

btnGen.addEventListener('click', sitcomGen);
    

/*const random = Math.trunc(Math.random()*3)+1;
   
    if(random === 1){
        console.log('Modern Family');
    
    } else if(random === 2){
        console.log('How i met your mother');
    } else {
        console.log("It's always sunny in philedelphia");
    
    }
    answer.textContent = `Today you should watch Modern family`;

    const sitcoms = ['Modern family', 'How i met your mother', 'It\'s always sunny in philedelphia'];

    }*/