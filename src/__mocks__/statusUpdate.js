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

export default changeStatus;