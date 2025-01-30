// admin.js

document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display admin data
    fetchAdminData();

    // Add event listener for logout
    document.getElementById('admin-logout').addEventListener('click', (e) => {
        e.preventDefault();
        // Here you would typically clear the admin's session
        console.log('Admin logged out');
        window.location.href = 'index.html';
    });

    // Add event listener for adding new task
    document.getElementById('add-task').addEventListener('click', addNewTask);
});

function fetchAdminData() {
    // This is where you would typically fetch admin data from your server
    // For this example, we'll use mock data
    const adminData = {
        totalUsers: 1000,
        activeTasks: 50,
        totalPlatformEarnings: 25000.00,
        tasks: [
            { id: 1, title: 'Data Entry Task', category: 'data-entry', pay: 5.00, status: 'Active' },
            { id: 2, title: 'Content Writing', category: 'content-writing', pay: 15.00, status: 'Completed' },
            { id: 3, title: 'Image Tagging', category: 'image-tagging', pay: 10.00, status: 'Active' },
        ],
        users: [
            { id: 1, name: 'John Doe', email: 'john@example.com', tasksCompleted: 15, totalEarnings: 250.50 },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com', tasksCompleted: 20, totalEarnings: 300.00 },
        ],
        payments: [
            { id: 1, user: 'John Doe', amount: 250.50, date: '2023-05-01', status: 'Completed' },
            { id: 2, user: 'Jane Smith', amount: 300.00, date: '2023-05-02', status: 'Pending' },
        ]
    };

    updateAdminDashboard(adminData);
}

function updateAdminDashboard(adminData) {
    document.getElementById('total-users').textContent = adminData.totalUsers;
    document.getElementById('active-tasks').textContent = adminData.activeTasks;
    document.getElementById('total-platform-earnings').textContent = `$${adminData.totalPlatformEarnings.toFixed(2)}`;

    updateTaskTable(adminData.tasks);
    updateUserTable(adminData.users);
    updatePaymentTable(adminData.payments);
}

function updateTaskTable(tasks) {
    const taskTable = document.getElementById('task-table').getElementsByTagName('tbody')[0];
    taskTable.innerHTML = '';
    tasks.forEach(task => {
        const row = taskTable.insertRow();
        row.innerHTML = `
            <td>${task.id}</td>
            <td>${task.title}</td>
            <td>${task.category}</td>
            <td>$${task.pay.toFixed(2)}</td>
            <td>${task.status}</td>
            <td>
                <button onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </td>
        `;
    });
}

function updateUserTable(users) {
    const userTable = document.getElementById('user-table').getElementsByTagName('tbody')[0];
    userTable.innerHTML = '';
    users.forEach(user => {
        const row = userTable.insertRow();
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.tasksCompleted}</td>
            <td>$${user.totalEarnings.toFixed(2)}</td>
            <td>
                <button onclick="viewUserDetails(${user.id})">View Details</button>
                <button onclick="deleteUser(${user.id})">Delete</button>
            </td>
        `;
    });
}

function updatePaymentTable(payments) {
    const paymentTable = document.getElementById('payment-table').getElementsByTagName('tbody')[0];
    paymentTable.innerHTML = '';
    payments.forEach(payment => {
        const row = paymentTable.insertRow();
        row.innerHTML = `
            <td>${payment.id}</td>
            <td>${payment.user}</td>
            <td>$${payment.amount.toFixed(2)}</td>
            <td>${payment.date}</td>
            <td>${payment.status}</td>
            <td>
                <button onclick="viewPaymentDetails(${payment.id})">View Details</button>
            </td>
        `;
    });
}

function addNewTask() {
    // This is where you would typically open a modal or redirect to a new task form
    console.log('Adding new task');
    alert('New task form would open here');
}

function editTask(taskId) {
    console.log(`Editing task ${taskId}`);
    alert(`Edit form for task ${taskId} would open here`);
}

function deleteTask(taskId) {
    console.log(`Deleting task ${taskId}`);
    if (confirm(`Are you sure you want to delete task ${taskId}?`)) {
        // Here you would typically send a delete request to your server
        alert(`Task ${taskId} has been deleted`);
    }
}

function viewUserDetails(userId) {
    console.log(`Viewing details for user ${userId}`);
    alert(`User details for user ${userId} would be displayed here`);
}

function deleteUser(userId) {
    console.log(`Deleting user ${userId}`);
    if (confirm(`Are you sure you want to delete user ${userId}?`)) {
        // Here you would typically send a delete request to your server
        alert(`User ${userId} has been deleted`);
    }
}

function viewPaymentDetails(paymentId) {
    console.log(`Viewing details for payment ${paymentId}`);
    alert(`Payment details for payment ${paymentId} would be displayed here`);
}