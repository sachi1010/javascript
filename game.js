// console.log("Welcome to the Game");
// console.log("All the best");
// console.log("lets play the game");

// function computer(){
//              const choice=["Stone","paper","Scissors"];
//                const randomIndex=Math.floor(Math.random()* choice.length);
//     return choice[randomIndex];
// }
// function winner(playerChoice,computerChoice){
// if(playerChoice==computerChoice){
//    return 'its a tie';
// }
// else if(
//              playerChoice==='stone'&& computerChoice==='paper'||
//              playerChoice==='paper'&& computerChoice==='scissors'||
//              playerChoice==='scissors'&& computerChoice==='stone'
// ){
//     return 'congatrs you are a win';
// }
// else{
// return 'sorry computer win';
// }
// }
// function playthegame(playerChoice){
//                 let computerChoice=computer();
//                   console.log(`you choose: ${playerChoice}`);
//                 console.log(`computer choose: ${computerChoice}`);
//                 console.log(winner(playerChoice,computerChoice));
// }

// const playerChoice="scissors";
// playthegame(playerChoice);


const grades = [85, 92, 78, 90, 88, 76];

function calculateAverage(grades) {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
}

function findHighestGrade(grades) {
    return Math.max(...grades);
}

function findLowestGrade(grades) {
    return Math.min(...grades);
}

console.log("Average Grade:", calculateAverage(grades));
console.log("Highest Grade:", findHighestGrade(grades));
console.log("Lowest Grade:", findLowestGrade(grades));


