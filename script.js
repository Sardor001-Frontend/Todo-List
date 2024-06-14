document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';

    const taskContent = document.createElement('p');
    taskContent.textContent = taskText;

    const taskTime = document.createElement('p');
    taskTime.className = 'task-time';
    taskTime.textContent = currentTime;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    const deleteImg = document.createElement('img');
    deleteImg.src = 'Group 14png.png';  
    deleteButton.appendChild(deleteImg);

    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskContent);
    taskItem.appendChild(taskTime);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';
}
