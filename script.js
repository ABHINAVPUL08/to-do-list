document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;
    const category = document.getElementById('category').value;

    if (taskInput.value === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');

    taskItem.innerHTML = `
        <span>
            ${taskInput.value} - ${dueDate ? `Due: ${dueDate}` : 'No due date'} - ${priority} - ${category}
        </span>
        <div class="task-actions">
            <button class="complete-button">Complete</button>
            <button class="delete-button">Delete</button>
        </div>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = '';

    taskItem.querySelector('.complete-button').addEventListener('click', () => {
        taskItem.style.textDecoration = 'line-through';
        taskItem.querySelector('.complete-button').disabled = true;
    });

    taskItem.querySelector('.delete-button').addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });
}
