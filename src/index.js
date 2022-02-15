// eslint-disable-next-line no-unused-vars
import style from './main.css';
import populateList from './modules/populateList.js';
import TaskList from './modules/taskList.js';
import Task from './modules/task.js';
import clearList from './modules/clearList.js';

const inputTask = document.querySelector('#newtask');
const element = document.querySelector('#task-list');
const newList = new TaskList();

inputTask.addEventListener('keypress', (event) => {
  if (event.keyCode === 13 && event.target.value) {
    event.preventDefault();
    const index = newList.storage.length + 1;
    const newTask = new Task(event.target.value, index);
    newList.addNew(newTask);
    event.target.value = '';
    clearList(element);
    populateList(newList.storage, element);
  }
});
