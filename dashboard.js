// dashboard.js

document.addEventListener('DOMContentLoaded', () => {
    // Fetch user data and update dashboard
    fetchUserData();

    // Logout functionality
    document.getElementById('logout').addEventListener('click', (e) => {
        e.preventDefault();
        // Here you would typically clear the user's session
        console.log('User logged out');
        window.location.href = 'index.html';
    });
});

function fetchUserData() {
    // This is where you would typically fetch user data from your server
    // For this example, we'll use mock data
    const userData = {
        name: 'John Doe',
        totalEarnings: 250.50,
        tasksCompleted: 15,
        availableTasks: 10,
        recentActivity: [
            { date: '2023-05-01', task: 'Data Entry', earnings: 10.00, status: 'Completed' },
            { date: '2023-04-30', task: 'Image Tagging', earnings: 15.50, status: 'Completed' },
            { date: '2023-04-29', task: 'Content Writing', earnings: 25.00, status: 'Pending Review' }
        ]
    };

    updateDashboard(userData);
}

function updateDashboard(userData) {
    document.getElementById('user-name').textContent = userData.name;
    document.getElementById('total-earnings').textContent = `$${userData.totalEarnings.toFixed(2)}`;
    document.getElementById('tasks-completed').textContent = userData.tasksCompleted;
    document.getElementById('available-tasks').textContent = userData.availableTasks;

    const activityTable = document.getElementById('activity-table').getElementsByTagName('tbody')[0];
    activityTable.innerHTML = '';
    userData.recentActivity.forEach(activity => {
        const row = activityTable.insertRow();
        row.innerHTML = `
            <td>${activity.date}</td>
            <td>${activity.task}</td>
            <td>$${activity.earnings.toFixed(2)}</td>
            <td>${activity.status}</td>
        `;
    });
}