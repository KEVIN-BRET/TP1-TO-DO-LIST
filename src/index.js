// import "./style.css";

// On pointe les éléments du DOM :
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("form > input");

// Bouton "Ajouter" :
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value;
  input.value = "";
  addTodo(value);
  displayTodo();
});

// on créé un tableau qui stockera les "todo" :
const todos = [
  {
    text: "Je suis une Todo",
    done: false,
  },
  {
    text: "faire du JavaScript",
    done: true,
  },
];

// Affichage du tableau :
const displayTodo = () => {
  const todosNode = todos.map((todo, index) => {
    return createTodoElement(todo, index);
  });
  ul.innerHTML = "";
  ul.append(...todosNode);
};

// format d'un "Todo" :
const createTodoElement = (todo, index) => {
  const li = document.createElement("li");
  const buttonDelete = document.createElement("button");
  buttonDelete.innerHTML = "Supprimer";
  buttonDelete.addEventListener("click", (event) => {
	deleteTodo(index)
  });
  li.innerHTML = `
		<span class="todo ${todo.done ? "done" : ""}"></span>
		<p>${todo.text}</p>
	`;
  li.appendChild(buttonDelete);
  return li;
};

// Ajouter un "todo" :
const addTodo = (text) => {
  todos.push({
    text,
    done: false,
  });
};

// Supprimer un "todo" :
const deleteTodo = (index) => {
  todos.splice(index, 1);
  displayTodo();
};

displayTodo();
