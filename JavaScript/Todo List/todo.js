let input = prompt("what would you like to do?");
const todos = ['Collect Eggs', 'Clean the Table']
while(input !== 'quit' && input !== 'q') {
    if(input === 'list') {
        console.log('****************')
        for(let i=0; i<todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('****************')

    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new Todo');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    } else if (input === 'delete') {
        const indexStr = parseInt(prompt('Ok, enter an index to delete'));
        if(!Number.isNaN(index)) {
            const deleted = todos.splice(deleteTodo, 1);
            console.log(`Ok, deleted  ${deleted[ 0]}`);
        } else {
            console.log(`Unknown index`)
        }
        
    }
    input = prompt("what would you like to do?")
}