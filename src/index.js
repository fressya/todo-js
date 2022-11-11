import './styles.css';


import{Todo,TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';


export const todoList = new TodoList();
 
//FUNCION FLECHA LARGA

//todoList.todos.forEach(todo => crearTodoHtml);





//crear una instancia delnuevo todo
//  const newTodo = new Todo ('Aprender JavaScript');
// // todoList.nuevoTodo(newTodo);
// todoList.todos.[0].imprimirClase ();

// newTodo.imprimirClase();


//FUNCION CORTA
todoList.todos.forEach(crearTodoHtml);

console.log('todos',todoList.todos);




// const tarea = new Todo('Aprender JavaScript!!');
// todoList.nuevoTodo(tarea);

// console.log(todoList);
// crearTodoHtml(tarea);


// localStorage.setItem('mi-key','ABC123');
// sessionsStorage.setItem('mi-key','ABC123');

// setTimeout(()  =>{

//     localStorage.removeItem('mi.key')

// },1500);
