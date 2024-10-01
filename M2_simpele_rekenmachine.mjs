import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let getal1 = await userInput.question('Voer een getal in: ');
let getal2 = await userInput.question('Voer een getal in: ');
let vraag = await userInput.question(' Wilt u de twee getallen optellen, aftrekken, delen of vermenigvuldigen? ');

getal1 = parseFloat(getal1);
getal2 = parseFloat(getal2);

let antwoord;
switch(vraag){
    case 'optellen':
        antwoord = getal1 + getal2;
        console.log('De uitkomst van  getal1 + getal2  = ' + antwoord);
        break;

        case 'aftrekken':
            antwoord = getal1 - getal2;
            console.log('De uitkomst van getal1 - getal2 = ' + antwoord);
            break;

            case 'delen':
                antwoord = getal1 / getal2;
                console.log('De uitkomst van getal1 / getal2 = ' + antwoord);
                break;

                case 'vermenigvuldigen':
                    antwoord = getal1 * getal2;
                    console.log('De uitkomst van getal1 * getal2 = ' + antwoord);
}

process.exit()