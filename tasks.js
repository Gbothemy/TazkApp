// tasks.js

document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display tasks
    fetchTasks();

    // Add event listeners for search and filters
    document.getElementById('task-search').addEventListener('input', filterTasks);
    document.getElementById('task-category').addEventListener('change', filterTasks);
    document.getElementById('task-sort').addEventListener('change', sortTasks);
});

function fetchTasks() {
    // This is where you would typically fetch tasks from your server
    // For this example, we'll use mock data
    const tasks = [
        { id: 1, title: 'Data Entry Task', description: 'Enter customer information into our database', pay: 5.00, time: '30 mins', category: 'data-entry' },
        { id: 2, title: 'Content Writing', description: 'Write a 500-word article on healthy eating habits', pay: 15.00, time: '2 hours', category: 'content-writing' },
        { id: 3, title: 'Image Tagging', description: 'Tag 100 images with relevant keywords', pay: 10.00, time: '1 hour', category: 'image-tagging' },
        // Add more mock tasks as needed
    ];

    displayTasks(tasks);
}

function displayTasks(tasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskElement = document.getElementById('task-template').content.cloneNode(true);
        taskElement.querySelector('.task-title').textContent = task.title;
        taskElement.querySelector('.task-description').textContent = task.description;
        taskElement.querySelector('.task-pay').textContent = `$${task.pay.toFixed(2)}`;
        taskElement.querySelector('.task-time').textContent = task.time;
        taskElement.querySelector('.task-category').textContent = task.category;
        taskElement.querySelector('.start-task').addEventListener('click', () => startTask(task.id));
        taskList.appendChild(taskElement);
    });
}

function filterTasks() {
    const searchTerm = document.getElementById('task-search').value.toLowerCase();
    const category = document.getElementById('task-category').value;

    const filteredTasks = Array.from(document.querySelectorAll('.task-card')).filter(task => {
        const title = task.querySelector('.task-title').textContent.toLowerCase();
        const taskCategory = task.querySelector('.task-category').textContent;
        const matchesSearch = title.includes(searchTerm);
        const matchesCategory = category === '' || taskCategory === category;
        return matchesSearch && matchesCategory;
    });

    document.querySelectorAll('.task-card').forEach(task => task.style.display = 'none');
    filteredTasks.forEach(task => task.style.display = 'block');
}

function sortTasks() {
    const sortBy = document.getElementById('task-sort').value;
    const taskList = document.getElementById('task-list');
    const tasks = Array.from(taskList.querySelectorAll('.task-card'));

    tasks.sort((a, b) => {
        if (sortBy === 'highest-pay') {
            const payA = parseFloat(a.querySelector('.task-pay').textContent.slice(1));
            const payB = parseFloat(b.querySelector('.task-pay').textContent.slice(1));
            return payB - payA;
        } else if (sortBy === 'easiest') {
            const timeA = a.querySelector('.task-time').textContent;
            const timeB = b.querySelector('.task-time').textContent;
            return timeA.localeCompare(timeB);
        }
        // For 'newest', we'll assume the current order is correct
        return 0;
    });

    taskList.innerHTML = '';
    tasks.forEach(task => taskList.appendChild(task));
}

function startTask(taskId) {
    // This is where you would typically redirect the user to the task page or show a task modal
    console.log(`Starting task ${taskId}`);
    alert(`You've started task ${taskId}. Good luck!`);
}