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
  li.innerHTML = `
		<span class="todo ${todo.done ? "done" : ""}"></span>
		<p>${todo.text}</p>
		<button>Supprimer</button>
	`;
  return li;
};

// Ajouter un "todo" :
const addTodo = (text) => {
  todos.push({
    text,
    done: false,
  });
};


displayTodo();
