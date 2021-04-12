let userinput = prompt("what would you like to do?");
const todos = ['homework', 'making breakfast'];

while (userinput !== "quit") {
    if(userinput == 'list'){
        console.log('vvvvv');
        for(let i = 0; i < todos.length; i++){
            console.log(`$[i], $[todos[i]]`)
        }
    }

  userinput = prompt("what would you like to do?");
}
console.log("you quited the app!");

