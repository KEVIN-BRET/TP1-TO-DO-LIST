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
    editMode: true,
  },
  {
    text: "faire du JavaScript",
    done: true,
    editMode: false,
  },
];

// Affichage du tableau :
const displayTodo = () => {
  const todosNode = todos.map((todo, index) => {
    if (todo.editMode) {
      return createTodoEditElement(todo, index);
    } else {
      return createTodoElement(todo, index);
    }
  });
  ul.innerHTML = "";
  ul.append(...todosNode);
};

// format d'un "Todo" :
const createTodoElement = (todo, index) => {
  const li = document.createElement("li");
  const buttonDelete = document.createElement("button");
  buttonDelete.innerHTML = "Supprimer";
  const buttonEdit = document.createElement("button");
  buttonEdit.innerHTML = "Editer";

  buttonDelete.addEventListener("click", (event) => {
    // pour eviter le toggle du li suivant
    event.stopPropagation();
    deleteTodo(index);
  });
  buttonEdit.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleEditMode(index);
  });
  li.innerHTML = `
		<span class="todo ${todo.done ? "done" : ""}"></span>
		<p>${todo.text}</p>
	`;
  li.addEventListener("click", (event) => {
    toggleTodo(index);
  });
  li.append(buttonEdit, buttonDelete);
  return li;
};

// Format d'édition d'un "todo" :
const createTodoEditElement = (todo, index) => {
  const li = document.createElement("li");
  const input = document.createElement("input");
  input.type = "text";
  input.value = todo.text;
  const buttonSave = document.createElement("button");
  buttonSave.innerHTML = "Save";
  const buttonCancel = document.createElement("button");
  buttonCancel.innerHTML = "Cancel";
  li.append(input, buttonCancel, buttonSave);
  return li;
};

// Ajouter un "todo" :
const addTodo = (text) => {
  todos.push({
    text,
    done: false,
  });
  displayTodo();
};

// Supprimer un "todo" :
const deleteTodo = (index) => {
  todos.splice(index, 1);
  displayTodo();
};

// Cocher / décocher un "todo" :
const toggleTodo = (index) => {
  todos[index].done = !todos[index].done;
  displayTodo();
};

// Passer en mode édition (ou non) :
const toggleEditMode = (index) => {
  todos[index].editMode = !todos[index].editMode;
  displayTodo();
};

displayTodo();
