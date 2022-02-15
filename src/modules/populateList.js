import dragIcon from '../assets/drag-icon.svg';

const populateList = (list, target) => {
  list.forEach((item) => {
    const li = document.createElement('li');
    li.setAttribute('id', item.index);
    const checkbox = document.createElement('input');
    const p = document.createElement('p');
    p.setAttribute('contentEditable', 'true');
    p.innerHTML = item.desc;
    const drag = document.createElement('img');
    drag.src = dragIcon;
    checkbox.setAttribute('type', 'checkbox');
    li.append(checkbox);
    li.append(p);
    li.append(drag);
    target.append(li);
  });
};

export default populateList;