import dragIcon from '../assets/drag-icon.svg';
import deleteIcon from '../assets/delete-icon.svg';

const populateList = (list, target) => {
  list.storage.forEach((item) => {
    const li = document.createElement('li');
    li.setAttribute('id', `t${item.index}`);
    li.setAttribute('class', 'task');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('class', 'check');
    checkbox.setAttribute('type', 'checkbox');
    const p = document.createElement('input');
    p.setAttribute('type', 'text');
    p.value = item.desc;
    p.className = 'taskText';
    const del = document.createElement('img');
    del.src = deleteIcon;
    del.setAttribute('class', 'del');
    const drag = document.createElement('img');
    drag.src = dragIcon;
    li.append(checkbox);
    li.append(p);
    li.append(del);
    li.append(drag);
    target.append(li);
  });
};

export default populateList;