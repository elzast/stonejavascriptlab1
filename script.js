const fullName = `Elijah Stone`;
const age = 2000000;
const birthday = `November 2nd`;
let isGCDetroit = true;

// console.log(fullName);
// console.log(age);
// console.log(birthday);
// console.log(isGCDetroit);

// how mitch solved array
// let lifeEvents=[
//   "I own a Harley Davidson",
//   "I was a cheerleader in College",
//   "I wrestled in highschool",
//   "I can do a handstand on a skateboard",
// ];

let lifeEvents = new Array()
lifeEvents[0] = `300 B.C -- Landed on Earth `;
lifeEvents[1] = `1800 A.D Became richest man in world ` ;
lifeEvents[2] = `1929 - Lost it all `;
lifeEvents[3] = `2010 - Rebuilding status `;



if (isGCDetroit) {
  console.log(`My name is ${fullName} and I am a student at Grand Circus in Detroit, Michigan.
  I am currently ${age} years old and my birthday is on ${birthday}.`);
} else {
  console.log(`My name is ${fullName} and I am a student at Grand Circus in Grand Rapids,
   Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}


for (let life of lifeEvents) {
    console.log(life);
  }


// Was not able to get this part to run!

// let counter =0;
// let randomNumber = Math.floor(Math.random() * 10 + 1);
//         console.log(randomNumber);
// while (true) {
//     if (randomNumber === !5); {
//         randomNumber++;
//         console.log(`randomNumber ${randomNumber} is not equal to 5`);
//     } else if(randomNumber === 5); {
//         counter++;
//         console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5`);
//     }
//      { break;
//     }
//   }






