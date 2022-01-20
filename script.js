function generateNumber(num){
    return Math.floor(Math.random()*num)
}

const jokeElements ={
    animal: ['cow', 'horse', 'dog', 'cat', 'dolphin', 'monkey'],
    activity: ['cross the road', 'open the door', 'walk to the beach', 'eat a steak', 'change the lightbulb'],
    reason: ['to earn money', 'to eat a pizza', 'to go to bed', 'to get to the other side faster', 'he saw you put out the garbage']
};
    
let joke = [];

for (let element in jokeElements){
    let selection = generateNumber(jokeElements[element].length);
    switch(element){
        case 'animal':
            joke.push(`Why did the ${jokeElements[element][selection]}`);
            break;
        case 'activity':
            joke.push(`${jokeElements[element][selection]}?`);
            break;
        case 'reason':
            joke.push(`${jokeElements[element][selection]}!`);
            break;
        default:
            joke.push('I forgot the joke');
    }
}

function formatJoke(arr){
    const formattedFirstLine = [joke[0],joke[1]];
    console.log(formattedFirstLine.join(' '));
    console.log(joke[2].toUpperCase());
}

formatJoke(joke);