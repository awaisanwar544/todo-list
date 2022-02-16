// eslint-disable-next-line no-unused-vars
import style from './main.css';
import populateList from './modules/populateList.js';
import TaskList from './modules/taskList.js';
import Task from './modules/task.js';
import clearList from './modules/clearList.js';
import updateTaskEvent from './modules/updateTask.js';
import removeTask from './modules/removeTask.js';
import { addToLocalStorage, getLocalStorage } from './modules/useLocalStorage.js';

const inputTask = document.querySelector('#newtask');
const element = document.querySelector('#task-list');
const newList = new TaskList();

const delEvent = () => {
  const del = document.querySelectorAll('.del');
  del.forEach((item) => {
    item.addEventListener('click', (event) => {
      removeTask(newList, event.target.parentElement.id);
      clearList(element);
      populateList(newList, element);
      addToLocalStorage(newList.storage);
      delEvent();
    });
  });
};

inputTask.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && event.target.value) {
    event.preventDefault();
    const index = newList.storage.length + 1;
    const newTask = new Task(event.target.value, index);
    newList.addNew(newTask);
    event.target.value = '';
    clearList(element);
    updateTaskEvent(element, newList.storage);
    populateList(newList, element);
    delEvent();
    addToLocalStorage(newList.storage);
  }
});

window.onload = () => {
  if (localStorage.length !== 0) {
    newList.storage = getLocalStorage();
    populateList(newList, element);
    delEvent();
  }
};
