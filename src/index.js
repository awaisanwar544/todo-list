// eslint-disable-next-line no-unused-vars
import style from './main.css';
import dragIcon from './drag-icon.svg';

const taskList = [
  {
    index: 1,
    description: 'Wash the dishes',
    completed: false,
  },
  {
    index: 2,
    description: 'Complete todo list project',
    completed: false,
  },
];

const populateList = (list, target) => {
  list.forEach((item) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const p = document.createElement('p');
    p.innerHTML = item.description;
    const drag = document.createElement('img');
    drag.src = dragIcon;
    checkbox.setAttribute('type', 'checkbox');
    li.append(checkbox);
    li.append(p);
    li.append(drag);
    target.append(li);
  });
};
const element = document.querySelector('#task-list');
populateList(taskList, element);