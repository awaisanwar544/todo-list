import dragIcon from '../assets/drag-icon.svg';
import deleteIcon from '../assets/delete-icon.svg';

const populateList = (list, target) => {
  list.storage.forEach((item) => {
    const li = document.createElement('li');
    li.setAttribute('id', item.index);
    li.setAttribute('class', 'task');
    const checkbox = document.createElement('input');
    const p = document.createElement('p');
    p.setAttribute('contentEditable', 'true');
    p.innerHTML = item.desc;
    const del = document.createElement('img');
    del.src = deleteIcon;
    del.setAttribute('class', 'del');
    const drag = document.createElement('img');
    drag.src = dragIcon;
    checkbox.setAttribute('type', 'checkbox');
    li.append(checkbox);
    li.append(p);
    li.append(del);
    li.append(drag);
    target.append(li);
  });
};

export default populateList;