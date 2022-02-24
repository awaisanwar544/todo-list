const changeStatus = (list, event) => {
  let ref = event.target.parentElement.id;
  ref = ref.replace(/[^0-9]/g, '');
  if (event.target.checked) {
    list.storage[Number(ref) - 1].completed = true;
    event.target.nextSibling.classList = 'doneTask';
  } else if (!event.target.checked) {
    list.storage[Number(ref) - 1].completed = false;
    event.target.nextSibling.classList = '';
  }
};

const checkStatusOnLoad = (list) => {
  list.storage.forEach((item) => {
    const ref = document.querySelector(`#t${item.index}`);
    if (item.completed) {
      ref.children[0].checked = true;
      ref.children[1].classList.add('doneTask');
    }
  });
};

export { changeStatus, checkStatusOnLoad };