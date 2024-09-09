let user = {
    habitList: [],
    taskList: [],
    completedTaskList: []
};

// const habitInput = document.getElementById('habit-input');
// const addHabitBtn = document.getElementById('add-habit-btn');
// const habitListElement = document.getElementById('habit-list');

const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskListElement = document.getElementById('task-list');
const completedTaskListElement = document.getElementById('completed-task-list');

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', clearEverything);

// Load user data from local storage
if (localStorage.getItem('user')) {
    user = JSON.parse(localStorage.getItem('user'));
    // renderHabitList();
    renderTaskList();
    renderCompletedTaskList();
}

// addHabitBtn.addEventListener('click', addHabit);
addTaskBtn.addEventListener('click', addTask);

// function addHabit() {
//     const habit = habitInput.value.trim();
//     if (habit !== '') {
//         user.habitList.push(habit);
//         habitInput.value = '';
//         renderHabitList();
//         saveUserData();
//     }
// }

function addTask() {
    const task = taskInput.value.trim();
    if (task !== '') {
        user.taskList.push(task);
        taskInput.value = '';
        renderTaskList();
        saveUserData();
    }
}

// function renderHabitList() {
//     habitListElement.innerHTML = '';
//     user.habitList.forEach((habit) => {
//         const li = document.createElement('li');
//         li.textContent = habit;
//         habitListElement.appendChild(li);
//     });
// }

function renderTaskList() {
    taskListElement.innerHTML = '';
    user.taskList.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => {
            completeTask(index);
        });
        li.appendChild(completeBtn);
        taskListElement.appendChild(li);
    });
}

function renderCompletedTaskList() {
    completedTaskListElement.innerHTML = '';
    user.completedTaskList.forEach((task) => {
        const li = document.createElement('li');
        li.textContent = task;
        completedTaskListElement.appendChild(li);
    });
}

function completeTask(index) {
    const task = user.taskList.splice(index, 1)[0];
    user.completedTaskList.push(task);
    renderTaskList();
    renderCompletedTaskList();
    saveUserData();
}

function clearEverything() {
    user.habitList = [];
    user.taskList = [];
    user.completedTaskList = [];
    // renderHabitList();
    renderTaskList();
    renderCompletedTaskList();
    saveUserData();
}

function saveUserData() {
    localStorage.setItem('user', JSON.stringify(user));
}


