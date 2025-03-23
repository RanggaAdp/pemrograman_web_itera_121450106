
function loadTodoList() {
    const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    const ul = document.getElementById('todo-list');
    ul.innerHTML = '';

    todoList.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${item.completed ? 'completed' : ''}">${item.text}</span>
            <button onclick="toggleCompleted(${index})">${item.completed ? 'Batal' : 'Selesai'}</button>
            <button onclick="deleteItem(${index})">Hapus</button>
        `;
        ul.appendChild(li);
    });
}


function addItem() {
    const input = document.getElementById('new-item');
    const text = input.value.trim();

    if (text !== '') {
        const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
        todoList.push({ text: text, completed: false });
        localStorage.setItem('todoList', JSON.stringify(todoList));
        input.value = '';
        loadTodoList();
    }
}


function toggleCompleted(index) {
    const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    todoList[index].completed = !todoList[index].completed;
    localStorage.setItem('todoList', JSON.stringify(todoList));
    loadTodoList();
}


function deleteItem(index) {
    const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    todoList.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    loadTodoList();
}


document.addEventListener('DOMContentLoaded', loadTodoList);